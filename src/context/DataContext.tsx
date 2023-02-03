import React from "react";
import { createContext, useEffect, useState } from "react";
import {
  DataToShow as ItemsWithToggle,
  FirestorePaths,
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
  getBestSellers,
} from "../firebase/firestore/access";
import {
  deleteDocById,
  stateChangerGenerator,
} from "../firebase/firestore/write";
import { CardData, ImageWithLink } from "../constans/types";
import { DASHBOARD_ROUTES } from "../constans/routes";
import { getDashboardCategoryImages } from "../firebase/storage/access";

export interface ItemProperties {
  [key: string]: number | string;
  title: string;
  image: string;
  id: string;
  price: number;
}

export type Inventory = Record<string, ItemProperties[]>;

export interface HeaderData {
  selectedCategory: string;
  headerInput: string;
}
export interface ContentData {
  dashboardCategories: CardData[];
  homeImages: ImageWithLink[];
  cardGroups: CardData[][];
  inventory: Inventory;
  dashboardImages: ImageWithLink[];
  bestSellers: ItemProperties[][];
}

export interface CartData {
  [id: string]: CartItem;
}
export interface CartItem extends ItemProperties {
  count: number;
  link: string;
}
export interface ItemAndColumn {
  column: number;
  item: ItemProperties | null;
}

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

const itemsWithToggle: ItemsWithToggle = { selectedHomeImages: [] };
const contentData: ContentData = {
  homeImages: [],
  cardGroups: [],
  inventory: {},
  dashboardCategories: [],
  dashboardImages: [],
  bestSellers: [],
};
const headerData: HeaderData = {
  headerInput: "",
  selectedCategory: "All",
};

const deleteByIdGenerator = (
  firebaseLocation: string,
  updateSnackbar: (text: string, color?: "green" | "red") => void
) => {
  const f = async (idToRemove: string) => {
    deleteDocById(idToRemove, firebaseLocation)
      .then(() => {
        updateSnackbar("Deleted item", "green");
      })
      .catch((e) => {
        updateSnackbar("Failed to delete item", "red");
        console.error(e);
      });
  };
  return f;
};

const itemAndColumn: ItemAndColumn = { item: null, column: -1 };

const cart: CartData = {};
export const DataContext = createContext({
  updateSelectedImagesList: (list: string[]) => {
    const f = async () => {
      return await console.log();
    };
    return f();
  },
  cartState: cart,
  activeIds: itemsWithToggle,
  contentData: contentData,
  headerData: headerData,
  addToCart: (item: ItemProperties, link: string, newCount: number) => {},
  modifyCart: (item: ItemProperties, newCount: number) => {},
  updateHeaderData: (s: string, a = "text") => {},
  deleteByIdGenerator: (
    s: string,
    updateSnackbar: (text: string, color?: "green" | "red") => void
  ) => {
    // placeholder to satisfy ts
    const x = async (a: string) => {
      return await console.log();
    };
    return x;
  },
  updateHomeImages: async (a: string) => {
    // placeholder to satisfy ts
    return await console.log();
  },
  bestSellerPair: itemAndColumn,
  editPair: (arg?: number | ItemProperties) => {},
  resetCart: () => {},
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // data for ui element
  const [headerData, setHeaderData] = useState<HeaderData>({
    selectedCategory: "All",
    headerInput: "",
  });
  const [bestSellerPair, setBestSellerPair] = useState<ItemAndColumn>({
    column: -1,
    item: null,
  });
  const [cartState, setCartState] = useState<CartData>({});
  // ids of images to fetch, found in db
  const [activeIds, setIdsOfItemsToDisplay] = useState<ItemsWithToggle>({
    selectedHomeImages: [],
  });
  //  object fetch from db, ready to display
  // home images - orderded and only those selected
  // dashboardImages  all images, only shown in dashboard
  const addToCart = (item: ItemProperties, link: string, count: number) => {
    // if item is not in cart, we add it
    // if count is equal to zero, throw error beacuse it shouldnt be possible
    if (count === 0) {
      throw new Error("Count should not be 0");
    }
    const cartCopy = { ...cartState };
    if (cartCopy[item.id] === undefined) {
      const newObj: CartItem = { ...item, count, link };
      setCartState({ ...cartCopy, [item.id]: newObj });
    } else {
      // it exists, we just have to change the count
      cartCopy[item.id].count += count;
      setCartState({ ...cartCopy });
    }
  };
  const modifyCart = (item: ItemProperties, newCount: number) => {
    // if new count === 0, we juest delete the item
    const cartCopy = { ...cartState };
    // if missing, we add it
    if (cartCopy[item.id] === undefined) {
      console.error("CANT EDIT MISSING ITEM");
    } else {
      // it exists, we just have to change the count
      // if new count ===0, we delete the object
      if (newCount === 0) {
        delete cartCopy[item.id];
      } else {
        cartCopy[item.id].count = newCount;
      }
      setCartState({ ...cartCopy });
    }
  };

  const [contentData, setContentData] = useState<ContentData>({
    dashboardCategories: [],
    homeImages: [],
    cardGroups: [[], [], []],
    inventory: {},
    dashboardImages: [],
    bestSellers: [],
  });
  const updateHeaderData = (
    value: string,
    target: "text" | "category" = "text"
  ) => {
    if (target === "text") {
      setHeaderData({ ...headerData, headerInput: value });
    } else {
      setHeaderData({ ...headerData, selectedCategory: value });
    }
  };
  const fetchDashboardCategoryImages = async () => {
    const response = await getDashboardCategoryImages();
    // updating the urls
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

  const editPair = (arg?: number | ItemProperties) => {
    if (arg === undefined) {
      setBestSellerPair({ item: null, column: -1 });
    } else if (typeof arg === "number") {
      setBestSellerPair({ ...bestSellerPair, column: arg });
    } else {
      setBestSellerPair({ ...bestSellerPair, item: arg });
    }
  };

  const init = async () => {
    const homeImagesRaw = await fetchHomeImages();
    const homeImages = (await convertFilePathsToImages(
      homeImagesRaw
    )) as ImageWithLink[];

    const groupCardsRaw = await getAllCardGroupes();
    const cardGroups: CardData[][] = [];
    for (const cardData of groupCardsRaw) {
      const res = (await convertFilePathsToImages(cardData)) as CardData[];
      cardGroups.push(res);
    }

    const bestSellersRaw = await getBestSellers();
    const bestSellers: ItemProperties[][] = [];
    for (const cardData of bestSellersRaw) {
      const res = (await convertFilePathsToImages(
        cardData
      )) as unknown as ItemProperties[];
      bestSellers.push(res);
    }

    const dashboardImages = await getAllHomeImagesLocal();
    const dashboardCategories = await fetchDashboardCategoryImages();
    const inventory = await fetchInventory();
    const itemNames = Object.keys(inventory);
    for (const itemName of itemNames) {
      inventory[itemName] = await convertFilePathsToImages(inventory[itemName]);
    }

    setContentData({
      bestSellers,
      homeImages,
      cardGroups,
      inventory,
      dashboardCategories,
      dashboardImages,
    });
  };

  const fetchInventory = async () => {
    const res: Inventory = {};
    for (const name of productNames) {
      const allProductsOfType = (await getAllDocs(ProductPaths[name])) as any;
      const productResult = allProductsOfType.res as ItemProperties[];
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
      // if objects is missing in db, but still listed as an item to display, we filter
      return a.res.filter((item) => item !== undefined);
    } else {
      // show snackabr
    }
  };

  const updateHomeImages = async (idToRemove) => {
    const newHome = contentData.dashboardImages.filter(
      (item) => item.id !== idToRemove
    );

    setContentData({ ...contentData, dashboardImages: newHome });
    deleteDocById(idToRemove, FirestorePaths.homeImages);
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
    return fun(newValue);
  };
  const resetCart = () => {
    setCartState({});
  };

  useEffect(() => {
    init();
  }, []);

  const val = {
    headerData,
    updateHeaderData,
    cartState,
    addToCart,
    modifyCart,
    activeIds,
    updateSelectedImagesList,
    contentData,
    deleteByIdGenerator,
    updateHomeImages,
    editPair,
    bestSellerPair,
    resetCart,
  };
  return (
    <DataContext.Provider value={{ ...val }}>{children}</DataContext.Provider>
  );
};
