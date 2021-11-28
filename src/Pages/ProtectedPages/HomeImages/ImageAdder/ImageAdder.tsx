import React from "react";
import PlainButton from "../../../../components/core/Buttons/PlainButton";
import FormikForm, {
  InputData,
} from "../../../../components/core/Form/FormikForm";
import styled from "styled-components";
import * as Yup from "yup";
import { uploadFromForm } from "../../../../firebase/firestore/write";

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
    validation: Yup.string().required("Image is required"),
  },
];
const Wrap = styled.div`
  width: 50%;
`;
const ImageAdder = () => {
  return (
    <Wrap>
      <FormikForm onSubmit={(values)=>{uploadFromForm(values,"/homeImages","")}} inputs={inputs}>
        <PlainButton text="Add home image" variant="submit" />
      </FormikForm>
    </Wrap>
  );
};

export default ImageAdder;
