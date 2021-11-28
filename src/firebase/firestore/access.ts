import { getDocs, collection } from "@firebase/firestore";
import { SnackbarTexts } from "../../constans/snackbar";
import { BaseFirestoreResposne, ImageWithLink } from "../../types";
import { myDb } from "../main";


interface HomeImagesResponse extends BaseFirestoreResposne{
  res:ImageWithLink[]
}

export const getAllHomeImages = async (): Promise<HomeImagesResponse> => {
  try {
    const querySnapshot = await getDocs(collection(myDb, "homeImages"));
    const result: ImageWithLink[] = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data() as ImageWithLink;
      result.push(docData);
    });

    return {
      res: result,
      error: false,
      text: SnackbarTexts.succesfulInitialFetching,
    };
  } catch (e:any) {
    console.error(e);
    return {
      res :[],
      error: true,
      text: SnackbarTexts.unsuccesfulInitialFetching + e.code,
    };
  }
};