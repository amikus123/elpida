import { doc, setDoc } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";
import { SnackbarTexts } from "../../constans/snackbar";
import { TextMixedFireStoreResposne } from "../../types";
import { myDb, myStorage } from "../main";
import { v4 as uuidv4 } from "uuid";

// function that uploads
type BaseTypes = string | number | any[] | Record<string, any>;
type PossibleTypes = BaseTypes | File | File[];
type FirestoreEntry = Record<string, BaseTypes>;
type FormData = Record<string, PossibleTypes>;

// key is name of attribute

export const uploadFromForm = async (
  data: FormData,
  path: string,
  imageLocation: string = path
) => {
  //* genereate random ID
  const dbId = uuidv4();
  const itemRef = doc(myDb, path, dbId);
  console.log(data,"DATA")
  try {
    const firebaseEntry: FirestoreEntry = {};

    const keys = Object.keys(data);
    const filePath = imageLocation + "/" + dbId;
    for (const key of keys) {
      console.log(key);
      let obj = data[key];
      if (
        obj instanceof File ||
        (obj instanceof Array && obj[0] instanceof File)
      ) {
        const res = await handleImageUpload(obj, filePath);
        firebaseEntry[key] = res.res;
      } else {
        firebaseEntry[key] = obj;
      }
    }

    await setDoc(itemRef, firebaseEntry, { merge: true });
    return {
      error: false,
      text: SnackbarTexts.succesfulDbAddition,
    };
  } catch (e: any) {
    console.error(e);
    return {
      error: true,
      text: SnackbarTexts.unsuccesfulDbAddition + e.code,
    };
  }
};

// this dunctions returs string if it is givent single File
// or arr of string is givent arr of Files
const handleImageUpload = async (
  fileData: File[] | File,
  filePath: string
): Promise<TextMixedFireStoreResposne> => {
  try {
    let res: string | string[] = "";
    const fileNames: string[] = [];
    if (Array.isArray(fileData)) {
      const uploading = fileData.map((file, index) => {
        const currentFileName = filePath + "-" + index;
        const storageRef = ref(myStorage, currentFileName);
        fileNames.push(currentFileName);
        return uploadBytes(storageRef, file);
      });
      res = fileNames;
      await Promise.all(uploading);
    } else {
      // TODO add chceck if already has extension
      res=filePath
      const storageRef = ref(myStorage, filePath);
      await uploadBytes(storageRef, fileData);
    }

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
