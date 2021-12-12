import React from "react";
import { createContext, useEffect, useState } from "react";
import {
  DataToShow as IdsOfItemsToDisplay,
  specificFirebasePaths,
} from "../constans/consts";
import {
  getWebisteData,
  getSelectedHomeImages,
  convertFilePathsToImages,
  getAllCardGroupes,
} from "../firebase/firestore/access";
import { stateChangerGenerator,updateCards } from "../firebase/firestore/write";
import { BaseResposne, CardData, ImageWithLink } from "../constans/types";

// used to provide betterautocomplete
const x: IdsOfItemsToDisplay = { selectedHomeImages: [] };
const y: X = { homeImages: [], cardGroups: [] };
const baseAsync = async(data:any)=>{
  const a = await console.log()as unknown as BaseResposne
  return a 
}
export const DataContext = createContext({
  selectedLocation: "Austria",
  setLocation: (location: string) => {},
  setCartCount: (newCount: number) => {},
  addNewCard:baseAsync,
  updateSelectedImagesList: (list: string[]) => {},
  cartCount: 0,
  dataToShow: x,
  objectsToDisplay: y,
});

export interface X {
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
  const [objectsToDisplay, setObjectsToDisplay] = useState<X>({
    homeImages: [],
    cardGroups: [[],[],[],[]],
  });


  const fetchHomeImages = async () => {
    const websiteData = await getWebisteData();
    if (!websiteData.error) {
      // fetch based on item
      setIdsOfItemsToDisplay(websiteData.res);
      const { selectedHomeImages } = websiteData.res;
      const a = await getSelectedHomeImages(selectedHomeImages);
      return a.res;
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
  
  const addNewCard = async(data:any)=>{
    const x = await updateCards(data,objectsToDisplay.cardGroups)
    return x
  }


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

      console.log(groupCardsRaw, cardGroups,"fin");
      setObjectsToDisplay({ homeImages, cardGroups });
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
    objectsToDisplay,
    addNewCard,
  };
  return (
    <DataContext.Provider value={{ ...val }}>{children}</DataContext.Provider>
  );
};
