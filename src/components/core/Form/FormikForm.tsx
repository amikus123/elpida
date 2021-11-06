import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormikInput, { FormikInputTypes } from "../Inputs/FormikInput";
import { ValidationTypes, WordMap } from "../../../types";


export interface InputData {
  type: FormikInputTypes;
  id: string;
  label: string;
  validation?: ValidationTypes;
}


interface ValidationMap {
  [key: string]: ValidationTypes;
}

interface SignupProps {
  inputs: InputData[];
  onSubmit: (arg1: any) => any;
  children: any;
}


const FormikForm = ({ inputs, onSubmit, children }: SignupProps) => {
  const getInitialValues = (inputs: InputData[]) => {
    const values: WordMap = {};
    const validation: ValidationMap = {};
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
    onSubmit: onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {inputs.map((item, index) => {
        return (
          <div>
            <FormikInput
              key={index}
              labelText={item.label}
              inputId={item.id}
              inputType={item.type}
              handleChange={formik.handleChange}
              value={formik.values[item.id]}
              handleBlur={formik.handleBlur}
              errorText={formik.errors[item.id]}
              showError={formik.touched[item.id] && formik.errors[item.id]}
            />
          </div>
        );
      })}
      {children}
    </form>
  );
};
export default FormikForm;
