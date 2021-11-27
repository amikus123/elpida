import { createContext, useEffect, useState } from "react";
import { DASHBOARD_ROUTES } from "../constans/routes";
import { getDashboardCategoryImages } from "../firebase/storage/access";
import { CardData } from "../types";
import { nameToPublicLink } from "../utils/imageFunctions";

const example: CardData = {
  imageName: "",
  topText: "INVENTORY",
  link: DASHBOARD_ROUTES.INVENTORY,
};
export const DashboardContext = createContext({
  categories: [example],
});

const baseState: CardData[] = [
  {
    imageName: "",
    topText: "INVENTORY",
    link: DASHBOARD_ROUTES.INVENTORY,
  },
  {
    imageName: "",
    topText: "BEST SELLERS",
    link: DASHBOARD_ROUTES.BEST_SELLERS,
  },
  {
    imageName: "",
    topText: "PROMOTED CARDS",
    link: DASHBOARD_ROUTES.PROMOTED_CARDS,
  },
  {
    imageName: "",
    topText: "HOME IMAGES",
    link: DASHBOARD_ROUTES.HOME_IMAGES,
  },
];

export const DashboardProvider = ({ children }: { children: any }) => {
  const [categories, setCategories] = useState<CardData[]>(baseState);
  useEffect(() => {
    const fetch = async ()=>{
      const urls = await getDashboardCategoryImages()
      // upadting the urls
      const copy = [...categories]
      urls.forEach((item,index)=>{
        copy[index].imageName = item
      })
      setCategories(copy)
    }
    fetch()
  }, [])
  const val = { categories };
  return (
    <DashboardContext.Provider value={{ ...val }}>
      {children}
    </DashboardContext.Provider>
  );
};
