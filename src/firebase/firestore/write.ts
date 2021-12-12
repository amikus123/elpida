import { doc, setDoc } from "firebase/firestore";
import { uploadBytes, ref } from "firebase/storage";
import { SnackbarTexts } from "../../constans/snackbar";
import { BaseResposne, TextMixedResposne } from "../../constans/types";
import { myDb, myStorage } from "../main";
import { v4 as uuidv4 } from "uuid";
import { FirestorePathObject } from "../../constans/consts";
import { getAllCardGroupes } from "./access";

// function that uploads
type BaseTypes = string | number | any[] | Record<string, any>;
type PossibleTypes = BaseTypes | File | File[];
type FirestoreEntry = Record<string, BaseTypes>;
type FormData = Record<string, PossibleTypes>;

export const updateCards = async (
  data: FormData,
  old: any
): Promise<BaseResposne> => {
  //* genereate random ID
  const dbId = uuidv4();
  const path = "promotedCards/promotedCards";

  console.log(data, "DATA");
  try {
    const firebaseEntry: FirestoreEntry = { id: dbId };
    const xd = await getAllCardGroupes();
    console.log(xd, "WESZLO");
    // we should add png while uploading
    const keys = Object.keys(data);
    const filePath = path + "/" + dbId + ".png";
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
    // generated dunctions updtates statre
    console.log(old, "WTD");
    await updateDoc({ ...xd, 0: [...xd[0], firebaseEntry] }, path);

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

export function stateChangerGenerator<T>(
  setState: React.Dispatch<React.SetStateAction<T>>,
  path: FirestorePathObject
) {
  const x = async (val: T) => {
    setState(val);
    updateDoc(val, path);
  };
  return x;
}
export const updateDoc = async (
  value: any,
  path: FirestorePathObject | string,
  merge = false
) => {
  try {
    let itemRef;
    if (typeof path === "string") {
      itemRef = doc(myDb, path);
    } else {
      const documentName = path.doc;
      const collection = path.col;
      itemRef = doc(myDb, documentName, collection);
    }

    await setDoc(itemRef, value, { merge });
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

export const uploadFromForm = async (
  data: FormData,
  path: string,
  imageLocation: string = path
): Promise<BaseResposne> => {
  //* genereate random ID
  const dbId = uuidv4();
  const itemRef = doc(myDb, path + dbId);

  console.log(data, "DATA");
  try {
    const firebaseEntry: FirestoreEntry = { id: dbId };
    // we should add png while uploading
    const keys = Object.keys(data);
    const filePath = imageLocation + "/" + dbId + ".png";
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
    // generated dunctions updtates statre
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
): Promise<TextMixedResposne> => {
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
      res = filePath;
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

export const updateGroupDragGenerator = (path: string) => {
  const res = async (value: Record<string, string>[][]) => {
    const x = await updateGroupDrag(value, path);
    return x;
  };

  return res;
};

export const updateGroupDrag = async (
  value: Record<string, string>[][],
  path: string
) => {
  try {
    const obj: Record<string, Record<string, string>[]> = {};
    for (const i in value) {
      obj[i] = value[i];
    }
    const itemRef = await doc(myDb, path);
    setDoc(itemRef, obj);
    return {
      error: false,
      text: SnackbarTexts.succesfulDbAddition,
    };
  } catch (e) {
    return {
      error: true,
      text: SnackbarTexts.unsuccesfulDbAddition + e.code,
    };
  }
};
