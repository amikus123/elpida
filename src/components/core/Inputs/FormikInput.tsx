import React from "react";

import styled from "styled-components";
import MyText from "../Text/MyText";

const Input = styled.input`
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

export type FormikInputTypes = "text" | "email" | "password" | "submit" |"file";
interface TextFormInputProps {
  value: string;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  inputId: string;
  labelText?: string;
  inputType: FormikInputTypes;
  errorText: string | undefined;
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  showError: string | false | undefined;
}

const FormikInput = ({
  value,
  inputType = "text",
  handleChange,
  handleBlur,
  labelText = "",
  inputId,
  errorText = "",
  showError = false,
}: TextFormInputProps) => {
  // label is optional
  return (
    <>
      {labelText !== "" ? (
        <MyText fontSize="1.25rem" labelTarget={inputId}>{labelText}</MyText>
      ) : null}{" "}
      <Input
        id={inputId}
        onBlur={handleBlur}
        value={value}
        type={inputType}
        onChange={handleChange}
      />
      {showError ? <MyText presetColor="red">{errorText}</MyText> : null}
    </>
  );
};

export default FormikInput;
