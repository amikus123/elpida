


// firestore mimics storage
// specific fileLoactions

export enum FirestorePaths {
  homeImages = "/homeImages/",
  dataToShow = "/dataToShow/",
  promotedCards = "/promotedCards/promotedCards",



}

export const productNames = ["beer","wine"]
export enum ProductPaths{
  beer = "/beer/",
  wine="/wine/"
}
export enum StoragePaths {
  homeImages = "/homeImages/",
}
// * STRUCTURE OF FIREBASE DATA

export interface Group{
  groupId:string,
  ids:string
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
