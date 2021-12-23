import { Field } from "formik";
import React from "react";

import styled from "styled-components";
import { FormikInputTypes, InputData } from "../Form/FormikForm";
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
  min-height: 25px;
  min-width: 25px;
  border-radius: 4px;
  border: 1px solid;
  border-color: ${(props) => props.theme.whiteBorder};
  padding: 0.25rem;
  &:focus {
    box-shadow: 0 0 0 3px #c8f3fa, 0 1px 2px rgba(15, 17, 17, 0.15) inset;
    border-color: #007185;
  }
`;

interface TextFormInputProps {
  item: InputData;
  errorText?: string | undefined;
  showError?: boolean | "" | undefined;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const FormikInput = ({
  item,
  errorText,
  showError,
  setFieldValue,
}: TextFormInputProps) => {
  const getCorrectInputType = (type: FormikInputTypes) => {
    let el = null;
    if (type === "file") {
      el = (
        <MyInput
          name={id}
          type="file"
          onChange={(event) => {
            if (event.currentTarget && event.currentTarget.files) {
              setFieldValue(id, event.currentTarget.files[0]);
            }
          }}
        />
      );
    } else if (type === "radio") {
      el = (
        <div role="group" aria-labelledby="my-radio-group" >
          {values.map((item, index) => {
            return (
              <label key={index} style={{paddingRight:"1rem"}}>
                <Field type="radio" name={id} value={item} />
                {item}
              </label>
            );
          })}
        </div>
      );
    } else {
      el = <MyField name={id} type={type} />;
    }

    return el;
  };
  // label is optional
  const { id, type, label, values } = item;
  return (
    <>
      {label !== "" ? (
        <MyText fontSize="1.25rem" labelTarget={id}>
          {label}
        </MyText>
      ) : null}
      {getCorrectInputType(type)}
      {showError ? <MyText presetColor="red">{errorText}</MyText> : null}
    </>
  );
};

export default FormikInput;
