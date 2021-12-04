import { User } from "firebase/auth";
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


export interface ImageWithLink {
  link: string;
  image: string;
  title: string;
  id:string;
}
// * FIREBASE TYPES


// DASHBOARD TYPES

export interface BaseResposne {
  text: string;
  error: boolean;
}
export interface TextResposne extends BaseResposne{
  res:string
}
export interface HomeImagesResponse extends BaseResposne {
  res: ImageWithLink[];
}
export interface TextArrResposne extends BaseResposne{
  res:string[]
}
export interface TextMixedResposne extends BaseResposne{
  res:string[] | string
}
export interface AnyResposne extends BaseResposne {
  res: any;
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


export interface UploadedImageWithLink{
  link:string,
  image:File
}