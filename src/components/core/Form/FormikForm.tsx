import React, { useContext } from "react";
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import FormikInput, { FormikInputTypes } from "../Inputs/FormikInput";
import { BaseFirestoreResposne, ValidationTypes } from "../../../types";
import Spinner from "../Loading/Spinner";
import styled from "styled-components";
import PlainButton from "../Buttons/PlainButton";
import { ElementContext } from "../../../context/ElementContext";
export interface InputData {
  type: FormikInputTypes;
  id: string;
  label: string;
  validation?: ValidationTypes;
}

const InputWrap = styled.div`
  margin: 1rem;
`;
interface SignupProps {
  inputs: InputData[];
  onSubmit: (arg1: any) => Promise<BaseFirestoreResposne>;
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
      onSubmit={async (values) => {
        console.log("XDDD")
        const res = await onSubmit(values);
        setSnackbarWithResposne(res)
        if(!res.error){
          // reset if succeded
          values={}
        }
      }}
      validationSchema={Yup.object(getInitialValues(inputs).validation)}
    >
      {({ isSubmitting, errors, touched, values, setFieldValue }) => (
        <Form>
          {inputs.map((item, index) => {
            const { type, id, label } = item;
            return (
              <InputWrap key={index}>
                <FormikInput
                  labelText={label}
                  setFieldValue={setFieldValue}
                  name={id}
                  inputType={type}
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
