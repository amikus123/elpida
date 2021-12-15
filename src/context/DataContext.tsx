import React, { useContext } from "react";
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
} from "../firebase/firestore/access";
import { stateChangerGenerator } from "../firebase/firestore/write";
import {  CardData, ImageWithLink } from "../constans/types";

// used to provide betterautocomplete
const x: IdsOfItemsToDisplay = { selectedHomeImages: [] };
const y: DataToShow = { homeImages: [], cardGroups: [] };

export const DataContext = createContext({
  selectedLocation: "Austria",
  setLocation: (location: string) => {},
  setCartCount: (newCount: number) => {},
  updateSelectedImagesList: (list: string[]) => {},
  cartCount: 0,
  dataToShow: x,
  objectsToDisplay: y,
});

export interface DataToShow {
  homeImages: ImageWithLink[];
  cardGroups: CardData[][];
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
    homeImages: [],
    cardGroups: [[],[],[],],
  });

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
      const rawInventory = await fetchInventory()
      const itemNames = Object.keys(rawInventory)
      for (const x of itemNames) {
        rawInventory[x] = await convertFilePathsToImages(rawInventory[x])
      }
      console.log( cardGroups,homeImages,"fin");
      console.log(rawInventory)
      setDataToShow({ homeImages, cardGroups });
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
  };
  return (
    <DataContext.Provider value={{ ...val }}>{children}</DataContext.Provider>
  );
};
