import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormikInput, { InputTypes } from "../Inputs/FormikInput";
import { RequiredStringSchema } from "yup/lib/string";
import { AnyObject } from "yup/lib/types";

export interface InputData {
  type: InputTypes;
  id: string;
  label: string;
  validation?: RequiredStringSchema<string | undefined, AnyObject> | null;
}

interface SignupProps {
  inputs: InputData[];
  onSubmit: (arg1: any) => any;
}
interface WordMap {
  [key: string]: string;
}
interface ValidationMap {
  [key: string]: RequiredStringSchema<string | undefined, AnyObject>;
}

// validationSchema: Yup.object({
//   email: Yup.string().email("Invalid email address").required("Required"),
// }),

const FormikForm = ({ inputs, onSubmit }: SignupProps) => {
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
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};
export default FormikForm;
