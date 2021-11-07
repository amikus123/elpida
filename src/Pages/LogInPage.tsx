import { useContext } from "react";
import * as Yup from "yup";

import PlainButton from "../components/core/Buttons/PlainButton";
import HorizontalText from "../components/core/Dividers/HorizontalText";
import FormikForm, { InputData } from "../components/core/Form/FormikForm";
import Text from "../components/core/Text/Text";
import FormWrap from "../containers/FormWrap";
import { UserContext } from "../context/UserContext";
import { WordMap } from "../types";
const LoginPage = () => {
  const { login } = useContext(UserContext);

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
  
  ];
  const onSubmit = async (e: WordMap, errors: any) => {
    errors.setSubmitting(true);
    const res = await login(e.email, e.password);
    console.log(res);
    if (res.length === 2) {
      errors.setErrors({ [res[0]]: res[1] });
    } else {
    }
    errors.setSubmitting(false);

  };

  return (
    <FormWrap>
      <Text variant="header" element="h1" fontSize="2rem">
        Log in
      </Text>
      <FormikForm onSubmit={onSubmit} inputs={inputs}>
        <PlainButton text="Log in" variant="submit" />
      </FormikForm>
      <form>
        <HorizontalText />
        <Text>
          New to Elpida?{" "}
          <Text to="/signup" variant="link" element="link">
            Sign up
          </Text>
        </Text>
      </form>
    </FormWrap>
  );
};

export default LoginPage;
