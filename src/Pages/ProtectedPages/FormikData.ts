import * as Yup from "yup";
import { InputData } from "../../components/core/Form/FormikForm";
import { FirestorePaths } from "../../constans/consts";
import {  updateGroupDragGenerator, uploadFromForm } from "../../firebase/firestore/write";
import { BaseResposne } from "../../constans/types";

export interface FormikData {
  inputs:InputData[],
  handleSubmit:(arg1: any) => Promise<BaseResposne>,
  submitButtonText:string,
}
type FormikDataWrap = Record<string,FormikData>
export const formikDashboardData:FormikDataWrap = {
  homeImages:{
    inputs: [
      {
        type: "text",
        id: "title",
        label: "Title and alt",
        validation: Yup.string().required("Title is required"),
      },
      {
        type: "text",
        id: "link",
        label: "Link destination",
        validation: Yup.string().required("Link is required"),
      },
      {
        type: "file",
        id: "image",
        label: "Home",
      },
    ],
    handleSubmit:async (values) => {
      return await uploadFromForm({...values}, FirestorePaths.homeImages);
  },
  submitButtonText:"Add Home Image",

},
promotedCards:{
  inputs: [
    {
      type: "text",
      id: "title",
      label: "Title and alt",
      validation: Yup.string().required("Title is required"),
    },
    {
      type: "text",
      id: "link",
      label: "Link destination",
      validation: Yup.string().required("Link is required"),
    },
    {
      type: "text",
      id: "bottomText",
      label: "Bottom text",
      validation: Yup.string().required("Bottom text is required"),
    },
    {
      type: "file",
      id: "image",
      label: "Card image",
    },
  ],
  handleSubmit:async (values) => {
    return await uploadFromForm({...values},  "promotedCards/");
},
submitButtonText:"Add card",

}
}

export interface AcceptableGroupData{
  image:string,
}
export const  groupDataTemplates:Record<string,GroupDragTemplate> = {
  promotedCards:{
    formik:formikDashboardData.promotedCards,
    updateDb:updateGroupDragGenerator(FirestorePaths.promotedCards),
    header:"Add new card"
  }
}
export interface GroupDragTemplate{
  formik:FormikData,
  updateDb:(val:Record<string,string>[][])=>Promise<BaseResposne>,
  header:string,
}