import React, { useContext } from "react";
import {  Form, Formik } from "formik";
import * as Yup from "yup";
import FormikInput from "../Inputs/FormikInput";
import { BaseResposne, ValidationTypes } from "../../../constans/types";
import Spinner from "../Loading/Spinner";
import styled from "styled-components";
import PlainButton from "../Buttons/PlainButton";
import { ElementContext } from "../../../context/ElementContext";
import { MyFormData } from "../../../firebase/firestore/write";
export interface InputData {
  type: FormikInputTypes;
  id: string;
  label: string;
  validation?: ValidationTypes;
  values?:string[];
}

export type FormikInputTypes =
  | "text"
  | "email"
  | "password"
  |"number"
  | "submit"
  |"radio"
  | "file";

const InputWrap = styled.div`
  margin: 1rem;
`;
interface SignupProps {
  inputs: InputData[];
  onSubmit: (arg1: MyFormData) => Promise<BaseResposne>;
  submitButtonText: string;
}

const FormikForm = ({ inputs, onSubmit, submitButtonText }: SignupProps) => {
  const {setSnackbarWithResposne} = useContext(ElementContext)

  const getInitialValues = (inputs: InputData[]) => {
    let values: Record<string, string> = {};
    const validation: Record<string, ValidationTypes> = {};
    inputs.forEach((item) => {
      values[item.id] = "";
      if (item.validation) {
        validation[item.id] = item.validation;
      }
    });
    return {
      values,
      validation,
    };
  };

  return (
    <Formik
      initialValues={getInitialValues(inputs).values}
      onSubmit={async (values,actions) => {
        console.log("XDDD")
        const res = await onSubmit(values);
        setSnackbarWithResposne(res)
        console.log(values,"XD")
        if(!res.error){
          // reset if succeded
          actions.resetForm()
        }
      }}
      
      validationSchema={Yup.object(getInitialValues(inputs).validation)}
    >
      {({ isSubmitting, errors, touched, values, setFieldValue }) => (
        <Form>
          {inputs.map((item, index) => {
            const {  id } = item;
            return (
              <InputWrap key={index}>
                <FormikInput
                  item={item}
                   setFieldValue={setFieldValue}
                  errorText={errors[id]}
                  showError={errors[id] && touched[id]}
                />
              </InputWrap>
            );
          })}
          <PlainButton text={submitButtonText} variant="submit" />

          {isSubmitting ? <Spinner /> : null}
        </Form>
      )}
    </Formik>
  );
};
export default FormikForm;
