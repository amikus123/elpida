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
  image: string;
  link: string;
}
export interface ImageWithLink extends  RowItem  {
  title: string;
  id?:string;
}
export interface CardData  extends ImageWithLink{
  bottomText?: string;
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



export interface Ad {
  signIn: boolean;
  addName: string;
}
export type CardArr = (Ad | CardData)[];

// * FIREBASE TYPES



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
export interface CardDataResponse extends BaseResposne {
  res: CardData[];
}
export interface CardDataResponsePlural extends BaseResposne {
  res: CardData[][];
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
  res: any ;
}

export interface AnyArrRespose extends BaseResposne {
  res: any[] ;
}


export interface UploadedImageWithLink{
  link:string,
  image:File
}