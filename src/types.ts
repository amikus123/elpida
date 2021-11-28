import { StringSchema } from "yup";
import { RequiredStringSchema } from "yup/lib/string";
import { AnyObject } from "yup/lib/types";

//* used in formik and Yup forms
export type ValidationTypes =
  | RequiredStringSchema<string | undefined, AnyObject>
  | StringSchema<string | undefined, AnyObject, string | undefined>;

//* used in Categoires object, to display card like objects

export interface RowItem {
  imageName: string;
  link: string;
}

export interface RowContent {
  products: RowItem[];
  // extra data to get iamge sourrce
  extraPath: string;
  // displayed Text
  header: string;
  // if linkt to shop should be displayed
  showLink: boolean;
}

// * USED IN CARD COMPONENT
export interface CardData {
  topText: string;
  imageName: string;
  bottomText?: string;
  link: string;
}
export interface Ad {
  signIn: boolean;
  addName: string;
}
export type CardArr = (Ad | CardData)[];

// DASHBOARD TYPES

export interface BaseFirestoreResposne {
  text: string;
  error: boolean;
}
export interface TextFirestoreResposne extends BaseFirestoreResposne{
  res:string
}

export interface TextArrFirestoreResposne extends BaseFirestoreResposne{
  res:string[]
}

export interface ImageWithLink{
  link:string,
  image:string
}
export interface UploadedImageWithLink{
  link:string,
  image:File
}