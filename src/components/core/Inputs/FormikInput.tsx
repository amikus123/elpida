import { Field, FormikErrors } from "formik";
import React from "react";

import styled from "styled-components";
import MyText from "../Text/MyText";

const MyInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${(props) => props.theme.whiteBorder};
  padding: 0.25rem;
  &:focus {
    box-shadow: 0 0 0 3px #c8f3fa, 0 1px 2px rgba(15, 17, 17, 0.15) inset;
    border-color: #007185;
  }
`;
const MyField = styled(Field)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${(props) => props.theme.whiteBorder};
  padding: 0.25rem;
  &:focus {
    box-shadow: 0 0 0 3px #c8f3fa, 0 1px 2px rgba(15, 17, 17, 0.15) inset;
    border-color: #007185;
  }
`;

export type FormikInputTypes =
  | "text"
  | "email"
  | "password"
  | "submit"
  | "file";
interface TextFormInputProps {
  name: string;
  labelText?: string;
  inputType: FormikInputTypes;
  errorText?: string | undefined;
  showError?: boolean |""| undefined;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
}

const FormikInput = ({
  name,
  labelText,
  inputType,
  errorText,
  showError,
  setFieldValue
}: TextFormInputProps) => {
  // label is optional
  return (
    <>
      {labelText !== "" ? (
        <MyText fontSize="1.25rem" labelTarget={name}>
          {labelText}
        </MyText>
      ) : null}
      {inputType === "file" ? (
        <MyInput
          name={name}
          type="file"
          onChange={(event:any) => {
            if (event.currentTarget && event.currentTarget.files) {
              setFieldValue(name, event.currentTarget.files[0]);
            }
          }}
        />
      ) : (
        <MyField name={name} type={inputType} />

      )}
      {showError ? <MyText presetColor="red">{errorText}</MyText> : null}
    </>
  );
};

export default FormikInput;
