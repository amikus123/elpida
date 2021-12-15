import { createContext, useState, useEffect, useContext } from "react";
import { DASHBOARD_ROUTES } from "../constans/routes";
import {
  convertFilePathsToImages,
  getAllHomeImages,
} from "../firebase/firestore/access";
import { getDashboardCategoryImages } from "../firebase/storage/access";
import { CardData, ImageWithLink } from "../constans/types";
import { setStateOrDisplayError } from "../utils/stateFunctions";
import { ElementContext } from "./ElementContext";
import { deleteDocById } from "../firebase/firestore/write";

const example: CardData = {
  image: "",
  title: "INVENTORY",
  link: DASHBOARD_ROUTES.INVENTORY,
};

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

const hm: ImageWithLink[] = [];
export const DashboardContext = createContext({
  categories: [example],
  initzialzeDashboard: async () => {
    return await console.log();
  },
  deleteByIdGenerator: (s: string) => {
    const x = async(a:string) => {return await console.log()};
    return x;
  },
  homeImages: hm,
});

export const DashboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // sued to display dashaborad UI
  const [categories, setCategories] = useState<CardData[]>(baseState);
  const [homeImages, setHomeImages] = useState<ImageWithLink[]>([]);

  const fetchDashboardCategoryImages = async () => {
    const response = await getDashboardCategoryImages();
    // upadting the urls
    const urls = response.res;
    const copy = [...categories];
    urls.forEach((item, index) => {
      copy[index].image = item;
    });
    setCategories(copy);
  };

  const getAllImages = async () => {
    const res = await getAllHomeImages();
    if (!res.error) {
      const a = (await convertFilePathsToImages(res.res)) as any;
      setHomeImages(a);
    }
  };
  const initzialzeDashboard = async () => {
    fetchDashboardCategoryImages();
    getAllImages();
  };

  const deleteByIdGenerator = (firebaseLocation: string) => {
    const x = async (idToRemove: string) => {
      deleteDocById(idToRemove, firebaseLocation).then(() => {
        initzialzeDashboard();
      });
    };
    return x;
  };

  useEffect(() => {
    initzialzeDashboard();
  }, []);

  const val = {
    categories,
    setCategories,
    initzialzeDashboard,
    homeImages,
    deleteByIdGenerator,
  };
  return (
    <DashboardContext.Provider value={{ ...val }}>
      {children}
    </DashboardContext.Provider>
  );
};
