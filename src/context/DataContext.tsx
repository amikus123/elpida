import { createContext, useState } from "react";

export const DataContext = createContext({
  selectedLocation: "Austria",
  setLocation:(location: string) => {},
});

export const DataProvider = ({ children }: { children: any }) => {
  const [selectedLocation, setSelectedLocation] = useState("Austria");

  const setLocation = (location: string) => {
    setSelectedLocation(location);
  };


  const val = { setLocation,selectedLocation};
  return (
    <DataContext.Provider value={{ ...val }}>
      {children}
    </DataContext.Provider>
  );
};
