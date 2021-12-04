// TYPES



// firestore mimics storage
// specific fileLoactions

export enum FirestorePaths {
  homeImages = "/homeImages",
  dataToShow = "/dataToShow",
}
export enum StoragePaths {
  homeImages = "/homeImages",
}
// * STRUCTURE OF FIREBASE DATA
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
