import React from "react";
import { Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import FormikInput, { FormikInputTypes } from "../Inputs/FormikInput";
import { ValidationTypes } from "../../../types";
import Spinner from "../Loading/Spinner";
import styled from "styled-components";
import PlainButton from "../Buttons/PlainButton";
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
  onSubmit: (arg1: any, arg2: any) => Promise<any>;
  submitButtonText:string;
}

const FormikForm = ({ inputs, onSubmit, submitButtonText }: SignupProps) => {
  const getInitialValues = (inputs: InputData[]) => {
    const values: Record<string, string> = {};
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
      onSubmit={async (values, errors) => {
        await onSubmit(values, errors);
      }}
      validationSchema={Yup.object(getInitialValues(inputs).validation)}
    >
      {({ isSubmitting, errors, touched, values, setFieldValue }) => (
        <Form>
          {JSON.stringify(values)}
          {isSubmitting}
          {inputs.map((item, index) => {
            const{type,id} = item
            return (
              <InputWrap key={index}>
                <FormikInput
                  setFieldValue={setFieldValue}
                  name={id}
                  inputType={type}
                  errorText={errors[id]}
                  showError={errors[id] && touched[id]}
                />
              </InputWrap>
            );
          })}
          <PlainButton text={submitButtonText} variant="submit"  />

          {isSubmitting ? <Spinner /> : null}
        </Form>
      )}
    </Formik>
  );
};
export default FormikForm;
