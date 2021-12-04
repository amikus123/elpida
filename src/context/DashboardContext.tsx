import { createContext,  useState,useEffect, useContext } from "react";
import { DASHBOARD_ROUTES } from "../constans/routes";
import { convertFilePathsToImages, getAllHomeImages } from "../firebase/firestore/access";
import { getDashboardCategoryImages } from "../firebase/storage/access";
import { CardData, ImageWithLink } from "../types";
import { setStateOrDisplayError } from "../utils/stateFunctions";
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

const hm :ImageWithLink[] = []
export const DashboardContext = createContext({
  categories: [example],
  initzialzeDashboard: async () => {
    return await console.log();
  },
  homeImages:hm
});

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const { setSnackbarWithResposne } = useContext(ElementContext);
  const [categories, setCategories] = useState<CardData[]>(baseState);
  const [homeImages, setHomeImages] = useState<ImageWithLink[]>([]);
  const fetchDashboardCategoryImages = async () => {
    const response = await getDashboardCategoryImages();
    // upadting the urls
    const urls = response.res;
    const copy = [...categories];
    urls.forEach((item, index) => {
      copy[index].imageName = item;
    });
    setCategories(copy);
  };
  const getAllImages = async () => {
    const res = await getAllHomeImages()
    if(res){
      const a  =  await convertFilePathsToImages(res.res)
      // get images
      setStateOrDisplayError(res, setHomeImages, setSnackbarWithResposne);
    }
  };
  const initzialzeDashboard = async() =>{
    fetchDashboardCategoryImages()
    getAllImages()
  }

  useEffect(()=>{
    initzialzeDashboard()
  },[])

  const val = { categories, setCategories, initzialzeDashboard,homeImages };
  return (
    <DashboardContext.Provider value={{ ...val }}>
      {children}
    </DashboardContext.Provider>
  );
};
