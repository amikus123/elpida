import { getDownloadURL,ref } from "firebase/storage";
import { SnackbarTexts } from "../../constans/snackbar";
import { BaseResposne } from "../../types";
import { myStorage } from "../main";




interface DashboardHomeImagesResponse extends BaseResposne{
  res:string[]
}

export const getUrlsForLinks =async (fileNames:string[],prefix:string)=>{
  const fetching = fileNames.map((fileName) => {
    const fileLocation = prefix+fileName
    console.log(fileLocation,"ffile")
    return getDownloadURL(ref(myStorage, fileLocation));
  });
  return  await Promise.all(fetching)
}

export const getDashboardCategoryImages = async (): Promise<DashboardHomeImagesResponse> => {
  try{
    const prefix = "dashboard/categoryImages/";
    const fileNames = [
      "INVENTORY.png",
      "PROMOTED_CARDS.png",
      "HOME_IMAGES.png",
      "BEST_SELLERS.png",
    ];
    const fetching = fileNames.map((fileName) => {
      const fileLocation = prefix+fileName
      return getDownloadURL(ref(myStorage, fileLocation));
    });
    const res =  await Promise.all(fetching)
    return   {
      res,
      error: false,
      text: "",
    };
  }catch(e:any){
    console.error(e);
    return {
      res :[],
      error: true,
      text: SnackbarTexts.unsuccesfulInitialFetching + e.code,
    };
  }

  
};

