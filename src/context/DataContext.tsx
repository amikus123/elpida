import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { DataToShow, specificFirebasePaths } from "../firebase/consts";
import {
  getWebisteData,
  getSelectedHomeImages,
} from "../firebase/firestore/access";
import { stateChangerGenerator } from "../firebase/firestore/write";
import {  ImageWithLink,CardData } from "../types";
import { setStateOrDisplayError } from "../utils/stateFunctions";
import { ElementContext } from "./ElementContext";
  const x :DataToShow= {selectedHomeImages:[]}
export const DataContext = createContext({
  selectedLocation: "Austria",
  setLocation: (location: string) => {},
  setCartCount: (newCount: number) => {},
  updateSelectedImagesList:(list:string[])=>{},
  cartCount: 0,
  dataToShow:x,
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // data for ui element
  const [selectedLocation, setSelectedLocation] = useState("Austria");
  const [cartCount, setCartCount] = useState(0);
  //* not all data from db 
  const [dataToShow,setDataToShow] = useState<DataToShow>({selectedHomeImages:[]})
  const [homeImagesToDisplay, setHomeImagesToDisplay] = useState<ImageWithLink[]>(
    []
  );

  const { setSnackbarWithResposne } = useContext(ElementContext);
  


  const fetchHomeImages = async () => {
    const websiteData = await getWebisteData();
    if (!websiteData.error) {
      // fetch based on item
      setDataToShow(websiteData.res)
      const { selectedHomeImages } = websiteData.res;
      const a = await getSelectedHomeImages(selectedHomeImages);
      setStateOrDisplayError(a, setHomeImagesToDisplay,setSnackbarWithResposne);
      console.log(websiteData.res,"RES")
    } else {
      // show snackabr
    }
  };



  const updateSelectedImagesList = (list:string[]) =>{
    const newValue :DataToShow= {...dataToShow,selectedHomeImages:list}
    const fun = stateChangerGenerator(setDataToShow,specificFirebasePaths.dataToShow)
    fun(newValue)
    
  }
  const setLocation = (location: string) => {
    setSelectedLocation(location);
  };
  useEffect(() => {
    fetchHomeImages();
  }, []);

  const val = { setLocation, selectedLocation, cartCount, setCartCount,dataToShow,updateSelectedImagesList };
  return (
    <DataContext.Provider value={{ ...val }}>{children}</DataContext.Provider>
  );
};
