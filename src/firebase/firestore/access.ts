import { getDocs, doc, collection, getDoc } from "@firebase/firestore";
import { SnackbarTexts } from "../../constans/snackbar";
import { BaseFirestoreResposne, ImageWithLink } from "../../types";
import { DataToShow, FirestorePathObject, FirestorePaths, specificFirebasePaths } from "../consts";
import { myDb } from "../main";
import { getUrlsForLinks } from "../storage/access";

export interface AnyResposne extends BaseFirestoreResposne {
  res: any;
}
interface HomeImagesResponse extends BaseFirestoreResposne {
  res: ImageWithLink[];
}

export const getAllHomeImages = async (): Promise<HomeImagesResponse> => {
  const x = await getAllDocs(
    FirestorePaths.homeImages
  ) as HomeImagesResponse 
  console.log(x,"getAllHomeImages")
  return x 
}
// get initialData =

export const getWebisteData = async (): Promise<
  BaseFirestoreResposne & { res: DataToShow }
> => {
  return (await getSingleDoc(
    specificFirebasePaths.dataToShow
  )) as BaseFirestoreResposne & { res: DataToShow };
};

export const getSelectedHomeImages = async (
  names: string[]
): Promise<BaseFirestoreResposne & { res: ImageWithLink[] }> => {
  console.log(names,"n,mx")
  return (await getMultipleDocs(
    FirestorePaths.homeImages,
    names
  )) as BaseFirestoreResposne & { res: ImageWithLink[] };
};



interface XD{
  image:string
}
export const convertFilePathsToImages =async (objectWithFiles:XD[],location:string="")=>{
  
  const fileNames = objectWithFiles.map(item=>item.image)
  console.log(objectWithFiles,fileNames,location,"CONVER")
  const links = await getUrlsForLinks(fileNames,location)
  for(const i in objectWithFiles){
    objectWithFiles[i].image = links[i]
  }
  return  objectWithFiles

}

export const getMultipleDocs = async (
  collection: string,
  documentNames: string[]
): Promise<unknown> => {
  try {
    let res: any = [];
    console.log("XDD",documentNames);
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
    console.log(docSnap.data(),"DOCK",documentName,collection)
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
    console.log(result,"res")
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