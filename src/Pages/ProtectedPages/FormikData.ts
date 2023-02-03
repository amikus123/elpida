import * as Yup from "yup";
import { InputData } from "../../components/core/Form/FormikForm";
import { FirestorePaths } from "../../constans/consts";
import {
  addNewDragObjectGenerator,
  MyFormData,
  updateGroupDragGenerator,
  uploadFromForm,
} from "../../firebase/firestore/write";
import { BaseResposne } from "../../constans/types";

export interface FormikData {
  inputs: InputData[];
  handleSubmit: (arg1: any) => Promise<BaseResposne>;
  submitButtonText: string;
}
export type FormikDataWrap = Record<string, FormikData>;
export const formikDashboardData: FormikDataWrap = {
  homeImages: {
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
    handleSubmit: async (values) => {
      const f = await uploadFromForm({ ...values }, FirestorePaths.homeImages);
      window.location.reload();
      return f;
    },
    submitButtonText: "Add Home Image",
  },
  promotedCards: {
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
        validation: Yup.string().required("Image is required"),
      },
    ],
    handleSubmit: async (values) => {
      // ! NEVER USED FUCNTION IS PASSED IN  groupDataTemplates
      throw new Error("zesranie");
    },

    submitButtonText: "Add card",
  },
  bestSellers: {
    inputs: [],
    handleSubmit: async (values) => {
      const a = await uploadFromForm({ ...values }, FirestorePaths.bestSellers);
      window.location.reload();
      return a;
    },
    submitButtonText: "Add Home Image",
  },
};

export interface AcceptableGroupData {
  image: string;
}
export const groupDataTemplates: Record<string, GroupDragTemplate> = {
  promotedCards: {
    formik: formikDashboardData.promotedCards,
    updateDb: updateGroupDragGenerator(FirestorePaths.promotedCards),
    header: "Add new card",
    addNewDragObject: addNewDragObjectGenerator(FirestorePaths.promotedCards),
  },
  bestSellers: {
    formik: formikDashboardData.bestSellers,
    updateDb: updateGroupDragGenerator(FirestorePaths.bestSellers),
    header: "Add new best seller",
    addNewDragObject: addNewDragObjectGenerator(FirestorePaths.bestSellers),
  },
};

export interface GroupDragTemplate {
  formik: FormikData;
  updateDb: (val: Record<string, string>[][]) => Promise<BaseResposne>;
  header: string;
  addNewDragObject: (data: MyFormData) => Promise<BaseResposne>;
}
