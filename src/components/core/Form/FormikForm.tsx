import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormikInput, { FormikInputTypes } from "../Inputs/FormikInput";
import { ValidationTypes } from "../../../types";
import Spinner from "../Loading/Spinner";
import styled from "styled-components";
export interface InputData {
  type: FormikInputTypes;
  id: string;
  label: string;
  validation?: ValidationTypes;
}

const InputWrap = styled.div`
  margin: 1rem;
`
interface SignupProps {
  inputs: InputData[];
  onSubmit: (arg1: any, arg2: any) => any;
  children: any;
}

const FormikForm = ({ inputs, onSubmit, children }: SignupProps) => {
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

  const formik = useFormik({
    initialValues: getInitialValues(inputs).values,
    validationSchema: Yup.object(getInitialValues(inputs).validation),
    onSubmit: (values, errors) => {
      onSubmit(values, errors);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        // prevents multiple form submissions
        e.preventDefault();
        if (!formik.isSubmitting) {
          formik.handleSubmit(e);
        }
      }}
    >
      {inputs.map((item, index) => {
        return (
          <InputWrap key={index}>
            <FormikInput
              labelText={item.label}
              inputId={item.id}
              inputType={item.type}
              handleChange={formik.handleChange}
              value={formik.values[item.id]}
              handleBlur={formik.handleBlur}
              errorText={formik.errors[item.id]}
              showError={formik.touched[item.id] && formik.errors[item.id]}
            />
          </InputWrap>
        );
      })}
      {/* dispalys spinner while form is being submitted */}
      {formik.isSubmitting ? (
        <>
          <Spinner />
        </>
      ) : null}
      {children}
    </form>
  );
};
export default FormikForm;
