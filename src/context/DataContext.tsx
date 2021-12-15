import React from "react";
import { createContext, useEffect, useState } from "react";
import {
  DataToShow as IdsOfItemsToDisplay,
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
import { deleteDocById, stateChangerGenerator } from "../firebase/firestore/write";
import {  CardData, ImageWithLink } from "../constans/types";
import { DASHBOARD_ROUTES } from "../constans/routes";
import { getDashboardCategoryImages } from "../firebase/storage/access";

// used to provide betterautocomplete

const example: CardData = {
  image: "",
  title: "INVENTORY",
  link: DASHBOARD_ROUTES.INVENTORY,
};

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


const x: IdsOfItemsToDisplay = { selectedHomeImages: [] };
const y: DataToShow = { homeImages: [], cardGroups: [] ,inventory:{} ,dashboardCategories:[],dashboardImages:[]};

export const DataContext = createContext({
  selectedLocation: "Austria",
  setLocation: (location: string) => {},
  setCartCount: (newCount: number) => {},
  updateSelectedImagesList: (list: string[]) => {},
  cartCount: 0,
  dataToShow: x,
  objectsToDisplay: y,
  categories: [example],
  initzialzeDashboard: async () => {
    return await console.log();
  },
  deleteByIdGenerator: (s: string) => {
    const x = async(a:string) => {return await console.log()};
    return x;
  },
});

export interface DataToShow {
  dashboardCategories:CardData[];
  homeImages: ImageWithLink[];
  cardGroups: CardData[][];
  inventory: Record<string,any>
  dashboardImages:any[]
}


export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // data for ui element
  const [selectedLocation, setSelectedLocation] = useState("Austria");
  const [cartCount, setCartCount] = useState(0);
  //* ids of images to fetch, found in db
  const [idsOfItemsToDisplay, setIdsOfItemsToDisplay] =
    useState<IdsOfItemsToDisplay>({ selectedHomeImages: [] });
  // * object fetch from db, ready to display
  const [dataToShow, setDataToShow] = useState<DataToShow>({
    dashboardCategories:[],
    homeImages: [],
    cardGroups: [[],[],[],],
    inventory:{},
    dashboardImages:[]
  });

  const [categories, setCategories] = useState<CardData[]>(baseState);

  const fetchDashboardCategoryImages = async () => {
    const response = await getDashboardCategoryImages();
    // upadting the urls
    const urls = response.res;
    const copy = [...categories];
    urls.forEach((item, index) => {
      copy[index].image = item;
    });
    return copy
  };

  const getAllImages = async () => {
    const res = await getAllHomeImages();
    if (!res.error) {
      const a = (await convertFilePathsToImages(res.res)) as any;
      return a
    }
    return []
  };
  const initzialzeDashboard = async () => {
    fetchDashboardCategoryImages();
    getAllImages();
  };

  const deleteByIdGenerator = (firebaseLocation: string) => {
    const x = async (idToRemove: string) => {
      deleteDocById(idToRemove, firebaseLocation).then(() => {
        initzialzeDashboard();
      });
    };
    return x;
  };

  useEffect(() => {
    initzialzeDashboard();
  }, []);
  const fetchInventory = async() =>{
    const res = {}
    for(const name of productNames){
      const  f = await getAllDocs(ProductPaths[name]) as any
      res[name] = f.res
    }
    return res
  }
  const fetchHomeImages = async () => {
    const websiteData = await getWebisteData();
    if (!websiteData.error) {
      // fetch based on item
      setIdsOfItemsToDisplay(websiteData.res);
      const { selectedHomeImages } = websiteData.res;
      const a = await getSelectedHomeImages(selectedHomeImages);
      // if objects is missing in db, but still listed as an item to display, we fillter 
      return a.res.filter(item=>item!==undefined);
    } else {
      // show snackabr
    }
  };

  const updateSelectedImagesList = (list: string[]) => {
    const newValue: IdsOfItemsToDisplay = {
      ...idsOfItemsToDisplay,
      selectedHomeImages: list,
    };
    const fun = stateChangerGenerator(
      setIdsOfItemsToDisplay,
      specificFirebasePaths.dataToShow
    );
    fun(newValue);
  };
  const setLocation = (location: string) => {
    setSelectedLocation(location);
  };
  

  useEffect(() => {
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
      const im =await  getAllImages()
      const xd = await fetchDashboardCategoryImages()
      const inventory = await fetchInventory()
      const itemNames = Object.keys(inventory)
      for (const x of itemNames) {
        inventory[x] = await convertFilePathsToImages(inventory[x])
      }
      console.log(inventory)
      setDataToShow({ homeImages, cardGroups,inventory,dashboardCategories:xd,dashboardImages:im });
    };
    init();
  }, []);

  const val = {
    setLocation,
    selectedLocation,
    cartCount,
    setCartCount,
    dataToShow: idsOfItemsToDisplay,
    updateSelectedImagesList,
    objectsToDisplay: dataToShow,
    categories,
    setCategories,
    initzialzeDashboard,
    deleteByIdGenerator,
  };
  return (
    <DataContext.Provider value={{ ...val }}>{children}</DataContext.Provider>
  );
};
