import { getDocs, doc, collection, getDoc } from "@firebase/firestore";
import { SnackbarTexts } from "../../constans/snackbar";
import {
  BaseResposne,
  CardData,
  CardDataResponse,
  HomeImagesResponse,
  ImageWithLink,
} from "../../constans/types";
import {
  DataToShow,
  FirestorePathObject,
  FirestorePaths,
  specificFirebasePaths,
} from "../../constans/consts";
import { myDb } from "../main";
import { getUrlsForLinks } from "../storage/access";

export const getAllHomeImages = async (): Promise<HomeImagesResponse> => {
  const x = (await getAllDocs(FirestorePaths.homeImages)) as HomeImagesResponse;
  // console.log(x, "getAllHomeImages");
  return x;
};

// ! FUNCTION TO GET ALL  SUBN COLLECTIONS

// ! REWRTE YOUR MESS 
// ! ADD BUTTON TO REFRESH ON FORM PAGES
// ! A LOT OF THIS CAN BE SIMPLIEIREF
export const getAllCardGroupes = async (): Promise<CardData[][]> => {
  const doc :any = await getSingleDoc("promotedCards/promotedCards")
  console.log(doc,"lul")
  const res = doc.res
  const arr :CardData[][] = []
  for(const key in Object.keys(res)){
    arr.push(res[key])
  }
  
  return arr;
};
// get initialData =

export const getWebisteData = async (): Promise<
  BaseResposne & { res: DataToShow }
> => {
  return (await getSingleDoc(
    specificFirebasePaths.dataToShow
  )) as BaseResposne & { res: DataToShow };
};

export const getSelectedHomeImages = async (
  names: string[]
): Promise<BaseResposne & { res: ImageWithLink[] }> => {
  return (await getMultipleDocs(
    FirestorePaths.homeImages,
    names
  )) as BaseResposne & { res: ImageWithLink[] };
};

interface ObjectWithImage {
  image: string;
}
// this function accepts any object with linkt to starage, and return thah object but with actual path to db
export const convertFilePathsToImages = async (
  objectWithFiles: ObjectWithImage[],
  location: string = ""
) => {
  const fileNames = objectWithFiles.map((item) => item.image);
  const links = await getUrlsForLinks(fileNames, location);
  for (const i in objectWithFiles) {
    objectWithFiles[i].image = links[i];
  }
  return objectWithFiles;
};

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
    console.error(e);

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
      res: docSnap.data(),
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
