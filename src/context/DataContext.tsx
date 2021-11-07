import { createContext, useState } from "react";

export const DataContext = createContext({
  selectedLocation: "Austria",
  setLocation:(location: string) => {},
  setCartCount:(newCount:number) => {},
  cartCount:0,

});

export const DataProvider = ({ children }: { children: any }) => {
  const [selectedLocation, setSelectedLocation] = useState("Austria");
  const [cartCount, setCartCount] = useState(0);

  const setLocation = (location: string) => {
    setSelectedLocation(location);
  };


  const val = { setLocation,selectedLocation,cartCount,setCartCount};
  return (
    <DataContext.Provider value={{ ...val }}>
      {children}
    </DataContext.Provider>
  );
};
