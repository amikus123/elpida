import React from "react";
import { createContext, useEffect, useState } from "react";
import {
  DataToShow as ItemsWithToggle,
  productNames,
  ProductPaths,
  specificFirebasePaths,
} from "../constans/consts";
import {
  getWebisteData,
  getSelectedHomeImages,
  convertFilePathsToImages,
  getAllCardGroupes,
  getAllDocs,
  getAllHomeImages,
} from "../firebase/firestore/access";
import {
  deleteDocById,
  stateChangerGenerator,
} from "../firebase/firestore/write";
import { CardData, ImageWithLink } from "../constans/types";
import { DASHBOARD_ROUTES } from "../constans/routes";
import { getDashboardCategoryImages } from "../firebase/storage/access";

const baseState: CardData[] = [
  {
    image: "",
    title: "INVENTORY",
    link: DASHBOARD_ROUTES.INVENTORY,
  },
  {
    image: "",
    title: "BEST SELLERS",
    link: DASHBOARD_ROUTES.BEST_SELLERS,
  },
  {
    image: "",
    title: "PROMOTED CARDS",
    link: DASHBOARD_ROUTES.PROMOTED_CARDS,
  },
  {
    image: "",
    title: "HOME IMAGES",
    link: DASHBOARD_ROUTES.HOME_IMAGES,
  },
];

const x: ItemsWithToggle = { selectedHomeImages: [] };
const y: ContentData = {
  homeImages: [],
  cardGroups: [],
  inventory: {},
  dashboardCategories: [],
  dashboardImages: [],
};
const z : HeaderData = {
  headerInput:"",
  selectedCategory:"All"
}
export const DataContext = createContext({
  setCartCount: (newCount: number) => {},
  updateSelectedImagesList: (list: string[]) => {},
  cartCount: 0,
  activeIds: x,
  contentData: y,
  headerData:z,
  updateHeaderData : (s:string,a="text")=>{},
  deleteByIdGenerator: (s: string) => {
    const x = async (a: string) => {
      return await console.log();
    };
    return x;
  },
});

export interface  ItemProperties  {
  [key : string]:number|string;
  title:string;
  image:string;
  id:string;
  price:number;
}

export type Inventory = Record<string,ItemProperties[]>

export interface HeaderData{
  selectedCategory:string,
  headerInput:string
}
export interface ContentData {
  dashboardCategories: CardData[];
  homeImages: ImageWithLink[];
  cardGroups: CardData[][];
  inventory: Inventory;
  dashboardImages: ImageWithLink[];
}

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // data for ui element
  const [headerData,setHeaderData] = useState<HeaderData>({selectedCategory:"All",headerInput:""})
  const [cartCount, setCartCount] = useState(0);
  //* ids of images to fetch, found in db
  const [activeIds, setIdsOfItemsToDisplay] = useState<ItemsWithToggle>({
    selectedHomeImages: [],
  });
  // * object fetch from db, ready to display
  // home images - orderded and only those selected
  // allHome images, only shown in dashboard

  const [contentData, setContentData] = useState<ContentData>({
    dashboardCategories: [],
    homeImages: [],
    cardGroups: [[], [], []],
    inventory: {},
    dashboardImages: [],
  });
  const updateHeaderData = (value:string,target:"text"|"category"="text") =>{
    if(target ==="text"){
      setHeaderData({...headerData,headerInput:value})

    }else{
      setHeaderData({...headerData,selectedCategory:value})
    }
  }
  const fetchDashboardCategoryImages = async () => {
    const response = await getDashboardCategoryImages();
    // upadting the urls
    const urls = response.res;
    urls.forEach((item, index) => {
      baseState[index].image = item;
    });
    return baseState;
  };

  const getAllHomeImagesLocal = async () => {
    const res = await getAllHomeImages();
    if (!res.error) {
      const a = (await convertFilePathsToImages(res.res)) as ImageWithLink[];
      return a;
    }
    return [];
  };

  const init = async () => {
    const homeImagesRaw = await fetchHomeImages();
    const homeImages = (await convertFilePathsToImages(
      homeImagesRaw
    )) as ImageWithLink[];
    const groupCardsRaw = await getAllCardGroupes();
    const cardGroups: CardData[][] = [];
    for (const x of groupCardsRaw) {
      const res = (await convertFilePathsToImages(x)) as CardData[];
      cardGroups.push(res);
    }
    const dashboardImages = await getAllHomeImagesLocal()
    const dashboardCategories = await fetchDashboardCategoryImages();
    const inventory = await fetchInventory();
    const itemNames = Object.keys(inventory);
    for (const x of itemNames) {
      inventory[x] = await convertFilePathsToImages(inventory[x]);
    }

    setContentData({
      homeImages,
      cardGroups,
      inventory,
      dashboardCategories,
      dashboardImages,
    });
  };

  const deleteByIdGenerator = (firebaseLocation: string) => {
    const x = async (idToRemove: string) => {
      deleteDocById(idToRemove, firebaseLocation).then(() => {
        // it used to re download data after deletion, but instaed we just hide it
        // init();
      });
    };
    return x;
  };

  const fetchInventory = async () => {
    const res : Inventory = {};
    for (const name of productNames) {
      const f = (await getAllDocs(ProductPaths[name])) as any;
      const productResult = f.res as  ItemProperties[]
      res[name] = productResult;
    }
    return res;
  };
  const fetchHomeImages = async () => {
    const websiteData = await getWebisteData();
    if (!websiteData.error) {
      // fetch based on item
      setIdsOfItemsToDisplay(websiteData.res);
      const { selectedHomeImages } = websiteData.res;
      const a = await getSelectedHomeImages(selectedHomeImages);
      // if objects is missing in db, but still listed as an item to display, we fillter
      return a.res.filter((item) => item !== undefined);
    } else {
      // show snackabr
    }
  };

  const updateSelectedImagesList = (list: string[]) => {
    const newValue: ItemsWithToggle = {
      ...activeIds,
      selectedHomeImages: list,
    };
    const fun = stateChangerGenerator(
      setIdsOfItemsToDisplay,
      specificFirebasePaths.dataToShow
    );
    fun(newValue);
  };


  useEffect(() => {
    init();
  }, []);

  const val = {
    headerData,
  
    updateHeaderData,
    cartCount,
    setCartCount,
    activeIds,
    updateSelectedImagesList,
    contentData,
    deleteByIdGenerator,
  };
  return (
    <DataContext.Provider value={{ ...val }}>{children}</DataContext.Provider>
  );
};
