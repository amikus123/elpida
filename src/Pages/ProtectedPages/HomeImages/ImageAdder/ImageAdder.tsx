import React from "react";
import PlainButton from "../../../../components/core/Buttons/PlainButton";
import FormikForm, {
  InputData,
} from "../../../../components/core/Form/FormikForm";
import styled from "styled-components";
import * as Yup from "yup";
import { uploadFromForm } from "../../../../firebase/firestore/write";
import { FirestorePaths } from "../../../../firebase/consts";

export interface HomeCardForm {
  image: File;
  link: string;
}
const inputs: InputData[] = [
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
  // TODO modify formik to accept file uploads
  return (
    <Wrap>
      <FormikForm
        onSubmit={async(values) => {
          uploadFromForm(values, FirestorePaths.homeImages);
        }}
        inputs={inputs}
      >
        <PlainButton text="Add home image" variant="submit" />
      </FormikForm>
    </Wrap>
  );
};

export default ImageAdder;
