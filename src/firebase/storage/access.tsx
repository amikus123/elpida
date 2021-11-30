import { getDownloadURL,ref } from "firebase/storage";
import { SnackbarTexts } from "../../constans/snackbar";
import { BaseFirestoreResposne } from "../../types";
import { myStorage } from "../main";




interface DashboardHomeImagesResponse extends BaseFirestoreResposne{
  res:string[]
}
export const getDashboardCategoryImages = async (): Promise<DashboardHomeImagesResponse> => {
  try{
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

