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

type InputTypes = "text" | "email" | "password";
interface TextFormInputProps {
  state: string;
  setState:
    | React.Dispatch<React.SetStateAction<string>>
    | ((arg1: string) => any);
  inputId: string;
  labelText?: string;
  inputType?: InputTypes;
}
const TextInput = ({
  state,
  setState,
  inputId,
  labelText = "",
  inputType = "text",
}: TextFormInputProps) => {
  // label is optional
  return (
    <>
      {labelText !== "" ? (
        <MyText labelTarget={inputId}>{labelText}</MyText>
      ) : null}{" "}
      <Input
        id={inputId}
        value={state}
        type={inputType}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </>
  );
};

export default TextInput;
