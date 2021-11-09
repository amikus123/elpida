import { StringSchema } from "yup";
import { RequiredStringSchema } from "yup/lib/string";
import { AnyObject } from "yup/lib/types";



// used in formik and Yup forms
export type ValidationTypes =
  | RequiredStringSchema<string | undefined, AnyObject>
  | StringSchema<string | undefined, AnyObject, string | undefined>;

