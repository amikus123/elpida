import { createContext, useEffect, useState,useContext } from "react";
import { DASHBOARD_ROUTES } from "../constans/routes";
import { getAllHomeImages } from "../firebase/firestore/access";
import { getDashboardCategoryImages } from "../firebase/storage/access";
import { CardData } from "../types";
import { ElementContext } from "./ElementContext";

const example: CardData = {
  imageName: "",
  topText: "INVENTORY",
  link: DASHBOARD_ROUTES.INVENTORY,
};

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

export const DashboardContext = createContext({
  categories: [example],
  fetchDashboardCategoryImages: async() => {return await console.log()},
});


export const DashboardProvider = ({ children }: { children: any }) => {
  const {setSnackbarWithResposne} =  useContext(ElementContext)
  const [categories, setCategories] = useState<CardData[]>(baseState);
  
  const fetchDashboardCategoryImages =async ()=>{
    const response = await getDashboardCategoryImages()
    console.log(response)
    // upadting the urls
    setSnackbarWithResposne(response)
    const urls = response.res
    const copy = [...categories]
    urls.forEach((item,index)=>{
      copy[index].imageName = item
    })
    setCategories(copy)
    console.log(await getAllHomeImages())
  }

  const val = { categories, setCategories,fetchDashboardCategoryImages};
  return (
    <DashboardContext.Provider value={{ ...val }}>
      {children}
    </DashboardContext.Provider>
  );
};
