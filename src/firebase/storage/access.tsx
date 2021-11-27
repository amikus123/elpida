import { getDownloadURL,ref } from "firebase/storage";
import { myStorage } from "../main";

interface ImageWithName{
  
}
// gets images for dashboard categories
export const getDashboardCategoryImages = async (): Promise<string[]> => {
  const prefix = "dashboard/categoryImages/";
  const fileNames = [
    "INVENTORY",
    "PROMOTED_CARDS",
    "HOME_IMAGES",
    "BEST_SELLERS",
  ];
  const fetching = fileNames.map((fileName) => {
    const fileLocation = prefix+fileName+".png"
    return getDownloadURL(ref(myStorage, fileLocation));
  });
  return Promise.all(fetching)
};
