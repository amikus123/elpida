import { useContext, useState } from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import PlainButton from "../components/core/Buttons/PlainButton";
import HorizontalText from "../components/core/Dividers/HorizontalText";
import FormikForm, { InputData } from "../components/core/Form/FormikForm";
import Text from "../components/core/Text/Text";
import FormWrap from "../containers/FormWrap";
import { UserContext } from "../context/UserContext";
import { WordMap } from "../types";



const SignupPage = () => {
  const { signup } = useContext(UserContext);
  const history = useHistory()
  const onSubmit = async (e: WordMap, errors: any) => {
    console.log(e, errors);
    errors.setSubmitting(true);
    console.log("subitmerd");
    const res = await signup(e.email, e.password);
    console.log(res);
    if (res.length === 2) {
      errors.setErrors({ [res[0]]: res[1] });
    } else {
    }
    history.replace("/") 
    errors.setSubmitting(false);

  };

  const inputs: InputData[] = [
    {
      type: "email",
      id: "email",
      label: "Email",
      validation: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    },
    {
      type: "password",
      id: "password",
      label: "Password",
      validation: Yup.string().required("Password is required"),
    },
    {
      type: "password",
      id: "confirmPassword",
      label: "Confrim Password",
      validation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("You must confirm your password"),
    },
  ];
  return (
    <FormWrap>
      <Text variant="header" element="h1" fontSize="2rem">
        Sign up
      </Text>
      <FormikForm onSubmit={onSubmit} inputs={inputs}>
        <PlainButton text="Sign up" variant="submit" />
      </FormikForm>

      <form>
        <HorizontalText />
        <Text>
          Already have an account?{" "}
          <Text to="/login" variant="link" element="link">
            Log in
          </Text>
        </Text>
      </form>
    </FormWrap>
  );
};

export default SignupPage;
