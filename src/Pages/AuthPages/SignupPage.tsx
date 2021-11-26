import { useContext, useState } from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import FormWrap from "../../components/containers/FormWrap"
import PlainButton from "../../components/core/Buttons/PlainButton";
import HorizontalText from "../../components/core/Dividers/HorizontalText";
import FormikForm, { InputData } from "../../components/core/Form/FormikForm";
import MyText from "../../components/core/Text/MyText";
import { UserContext } from "../../context/UserContext";

const SignupPage = () => {
  const { signup } = useContext(UserContext);
  const history = useHistory();
  const onSubmit = async (e: Record<string, string>, errors: any) => {
    console.log(e, errors);
    errors.setSubmitting(true);
    console.log("subitmerd");
    const res = await signup(e.email, e.password);
    console.log(res);
    if (res.length === 2) {
      errors.setErrors({ [res[0]]: res[1] });
    } else {
    }
    history.replace("/");
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
      <MyText variant="header" element="h1" fontSize="2rem">
        Sign up
      </MyText>
      <FormikForm onSubmit={onSubmit} inputs={inputs}>
        <PlainButton text="Sign up" variant="submit" />
      </FormikForm>

      <form>
        <HorizontalText />
        <MyText>
          Already have an account?{" "}
          <MyText to="/login" variant="link" element="link">
            Log in
          </MyText>
        </MyText>
      </form>
    </FormWrap>
  );
};

export default SignupPage;
