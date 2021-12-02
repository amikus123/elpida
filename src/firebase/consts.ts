// TYPES

import { User } from "@firebase/auth";

// LOACTIONS

// firestore mimics storage
// specific fileLoactions

export enum FirestorePaths {
  homeImages = "/homeImages",
  dataToShow = "/dataToShow",
}
export enum StoragePaths {
  homeImages = "/homeImages",
}

export interface DataToShow {
  selectedHomeImages: string[];
}
export interface WebsiteData {
  dataToShow: DataToShow;
}
export interface FirebaseModel {
  websiteData: WebsiteData;
}

export interface BaseResposne {
  text: string;
  error: boolean;
}
export interface UserResposne extends BaseResposne {
  res: User;
}
export interface AnyRespose extends BaseResposne {
  res: any | null;
}

export interface FirestorePathObject {
  col: string;
  doc: string;
}
export const specificFirebasePaths = {
  dataToShow: {
    col: FirestorePaths.dataToShow,
    doc: "dataToShow",
  },
};
