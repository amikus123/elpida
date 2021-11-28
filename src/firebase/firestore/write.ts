import { doc, setDoc } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";
import { SnackbarTexts } from "../../constans/snackbar";
import {
  TextArrFirestoreResposne,
  TextFirestoreResposne,
} from "../../types";
import { myDb, myStorage } from "../main";
import { v4 as uuidv4 } from "uuid";

// function that uploads
type BaseTypes = string | number | any[] | Record<string, any>;
type PossibleTypes = BaseTypes | File | File[];
type FirestoreEntry = Record<string, BaseTypes>;
type FormData = Record<string, PossibleTypes>;
// key is name of attribute
// we can

export const uploadFromForm = async (
  data: FormData,
  path: string,
  imageLocation: string = ""
) => {

  console.log(data)
  const dbId = uuidv4();
  const itemRef = doc(myDb, path, dbId);
  try {
    const firebaseEntry: FirestoreEntry = {};

    const keys = Object.keys(data);
    for (const key of keys) {
      console.log(key)
      let obj = data[key];
      if (obj instanceof File) {
        const res = await uploadImage(obj, dbId, imageLocation);
        firebaseEntry[key] = res.res;
      } else if (obj instanceof Array && obj[0] instanceof File) {
        const res = await uploadImgaes(obj, dbId, imageLocation);
        firebaseEntry[key] = res.res;
      } else {
        firebaseEntry[key] = obj;
      }
    }
    console.log("fins")

    await setDoc(itemRef, firebaseEntry, { merge: true });
    return {
      error: false,
      text: SnackbarTexts.succesfulDbAddition,
    };
  } catch (e: any) {
    console.error(e)
    return {
      error: true,
      text: SnackbarTexts.unsuccesfulDbAddition + e.code,
    };
  }
};

const uploadImgaes = async (
  arr: File[],
  name: string,
  imagePath: string = ""
): Promise<TextArrFirestoreResposne> => {
  try {
    const fileNames: string[] = [];
    const uploading = arr.map((file, index) => {
      const currentFileName = imagePath + name + ".jpg";
      fileNames.push(currentFileName);
      return uploadImage(file, currentFileName);
    });
    await Promise.all(uploading);
    return {
      res: fileNames,
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

const uploadImage = async (
  file: File,
  fileName: string,
  imagePath: string = ""
): Promise<TextFirestoreResposne> => {
  try {
    // TODO add chceck if already has extension
    const finalPath = imagePath + fileName + ".jpg";
    const storageRef = ref(myStorage, fileName);

    await uploadBytes(storageRef, file);
    return {
      res: finalPath,
      error: false,
      text: SnackbarTexts.succesfulImageUpload,
    };
  } catch (e: any) {
    return {
      res: "",
      error: true,
      text: SnackbarTexts.unsuccesfulImageUpload + e.code,
    };
  }
};
