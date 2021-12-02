import React, { useContext } from "react";
import FormikForm, {
  InputData,
} from "../../../../components/core/Form/FormikForm";
import styled from "styled-components";
import * as Yup from "yup";
import { uploadFromForm } from "../../../../firebase/firestore/write";
import { FirestorePaths } from "../../../../firebase/consts";
import { ElementContext } from "../../../../context/ElementContext";

export interface HomeCardForm {
  image: File;
  link: string;
}

// TODO consider changing link field to dropdown
const inputs: InputData[] = [
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
    id: "file",
    label: "Home",
  },
];
const Wrap = styled.div`
  width: 50%;
`;
const ImageAdder = () => {
  return (
    <Wrap>
      <FormikForm
        onSubmit={async (values) => {
          return await uploadFromForm(values, FirestorePaths.homeImages);
        }}
        inputs={inputs}
        submitButtonText="Add Home Image"
      />
    </Wrap>
  );
};

export default ImageAdder;
