import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import {
  getWebisteData,
  getSelectedHomeImages,
} from "../firebase/firestore/access";
import { BaseFirestoreResposne, HomeImage } from "../types";
import { setStateOrDisplayError } from "../utils/stateFunctions";
import { ElementContext } from "./ElementContext";

export const DataContext = createContext({
  selectedLocation: "Austria",
  setLocation: (location: string) => {},
  setCartCount: (newCount: number) => {},
  cartCount: 0,
});

export const DataProvider = ({ children }: { children: any }) => {
  const [selectedLocation, setSelectedLocation] = useState("Austria");
  const [cartCount, setCartCount] = useState(0);

  const [homeImagesToDisplay, setHomeImagesToDisplay] = useState<HomeImage[]>(
    []
  );
  const { setSnackbarWithResposne } = useContext(ElementContext);
  


  const fetchHomeImages = async () => {
    const websiteData = await getWebisteData();
    if (websiteData.res !== null) {
      // fetch based on item
      console.log(websiteData);
      const { selectedHomeImages } = websiteData.res;
      const a = await getSelectedHomeImages(selectedHomeImages);
      setStateOrDisplayError(a, setHomeImagesToDisplay,setSnackbarWithResposne);
    } else {
      // show snackabr
    }
  };
  const setLocation = (location: string) => {
    setSelectedLocation(location);
  };
  useEffect(() => {
    fetchHomeImages();
  }, []);

  const val = { setLocation, selectedLocation, cartCount, setCartCount };
  return (
    <DataContext.Provider value={{ ...val }}>{children}</DataContext.Provider>
  );
};
