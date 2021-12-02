import { getDocs, doc, collection, getDoc } from "@firebase/firestore";
import { SnackbarTexts } from "../../constans/snackbar";
import { BaseFirestoreResposne, HomeImage, ImageWithLink } from "../../types";
import {
  DataToShow,
  FirestorePathObject,
  FirestorePaths,
  
} from "../consts";
import { myDb } from "../main";

export interface AnyResposne extends BaseFirestoreResposne {
  res: any;
}
interface HomeImagesResponse extends BaseFirestoreResposne {
  res: ImageWithLink[];
}

export const getAllHomeImages = async (): Promise<HomeImagesResponse> => {
  try {
    const querySnapshot = await getDocs(
      collection(myDb, FirestorePaths.homeImages)
    );
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
  } catch (e: any) {
    console.error(e);
    return {
      res: [],
      error: true,
      text: SnackbarTexts.unsuccesfulInitialFetching + e.code,
    };
  }
};
// get initialData =

export const getWebisteData = async (): Promise<
  BaseFirestoreResposne & { res: DataToShow }
> => {
  return (await getAllDocs(
    FirestorePaths.dataToShow
  )) as BaseFirestoreResposne & { res: DataToShow };
};

export const getSelectedHomeImages = async (
  names: string[]
): Promise<BaseFirestoreResposne & { res: HomeImage[] }> => {
  return (await getMultipleDocs(
    FirestorePaths.homeImages,
    names
  )) as BaseFirestoreResposne & { res: HomeImage[] };
};

// or arr of string is givent arr of Files
// exttend to sue object

export const getMultipleDocs = async (
  collection: string,
  documentNames: string[]
): Promise<unknown> => {
  try {
    let res: any = [];
    const fetching = documentNames.map((name) => {
      return getSingleDoc(collection, name);
    });

    await Promise.all(fetching).then((items) => {
      res = items.map((item: any) => {
        return item.res;
      });
    });

    return {
      res: res,
      error: false,
      text: SnackbarTexts.succesfulImageUpload,
    };
  } catch (e: any) {
    return {
      res: [],
      error: true,
      text: SnackbarTexts.unsuccesfulImageUpload + e.code,
    };
  }
};

// we can pass an object  to simplify the procuder
export const getSingleDoc = async (
  collection: string | FirestorePathObject,
  documentName: string = ""
): Promise<unknown> => {
  try {
    if (typeof collection !== "string") {
      documentName = collection.doc;
      collection = collection.col;
    }
    const docRef = doc(myDb, collection, documentName);
    const docSnap = await getDoc(docRef);
    return {
      res: docSnap.data,
      error: false,
      text: SnackbarTexts.succesfulInitialFetching,
    };
  } catch (e: any) {
    console.error(e);
    return {
      res: {},
      error: true,
      text: SnackbarTexts.unsuccesfulInitialFetching + e.code,
    };
  }
};
export const getAllDocs = async (
  firestoreLocation: string
): Promise<unknown> => {
  try {
    const querySnapshot = await getDocs(collection(myDb, firestoreLocation));
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
  } catch (e: any) {
    console.error(e);
    return {
      res: [],
      error: true,
      text: SnackbarTexts.unsuccesfulInitialFetching + e.code,
    };
  }
};
