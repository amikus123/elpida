import * as Yup from "yup";
import { InputData } from "../../../components/core/Form/FormikForm";
import { ProductPaths, } from "../../../constans/consts";
import { uploadFromForm } from "../../../firebase/firestore/write";
import { FormikDataWrap } from "../FormikData";


// common interface for all products
export const baseProdcutInputs : InputData[]= [
  {
    type: "text",
    id: "title",
    label: "Name",
    validation: Yup.string().required("Name is required"),
  },
  {
    type: "text",
    id: "description",
    label: "Description",
    validation: Yup.string().required("Description is required"),
  },

  {
    type: "number",
    id: "alcoholPercentage",
    label: "Alcohol Percentage",
    validation: Yup.string().required("Alcohol Percentage is required"),
  },
  {
    type: "number",
    id: "price",
    label: "Price",
    validation: Yup.string().required("Title is required"),
  },

  {
    type: "file",
    id: "image",
    label: "Image",
  },
];




export const formikAlchoholData: FormikDataWrap = {
  wine: {
    inputs: [
      {
        type: "radio",
        id: "taste",
        label:"Taste",
        values:["dry","sweet","medium sweet"],
        validation: Yup.string().required("Link is required"),

      },
      {
        type: "radio",
        id: "color",
        label:"Color",
        values:["red","white"]
      },
    ],
    handleSubmit: async (values) => {
      return await uploadFromForm({ ...values }, ProductPaths.wine);
    },
    submitButtonText: "Add Wine",
  },
  beer: {
    inputs: [
      {
        type: "radio",
        id: "category",
        label:"Type",
        values:["IPA","Porter",]
      },

    ],
    handleSubmit: async (values) => {
      return await uploadFromForm({ ...values }, ProductPaths.beer);
    },
    submitButtonText: "Add Beer",
  },
};

interface BaseItemTemplate {
  price: string;
  image: string;
  name: string;
  id: string;
}
export interface FridgeTemplate extends BaseItemTemplate {}


