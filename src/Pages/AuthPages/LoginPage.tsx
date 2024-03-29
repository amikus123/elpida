import { useContext } from "react";
import * as Yup from "yup";

import HorizontalText from "../../components/core/Dividers/HorizontalText";
import FormikForm, { InputData } from "../../components/core/Form/FormikForm";
import MyText from "../../components/core/Text/MyText";
import FormWrap from "../../components/containers/FormWrap";
import { UserContext } from "../../context/UserContext";
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
  const onSubmit = async (e: Record<string, string>) => {
    return await login(e.email, e.password);
  };

  return (
    <FormWrap>
      <MyText variant="header" element="h1" fontSize="2rem">
        Log in
      </MyText>
      <FormikForm
        onSubmit={onSubmit}
        inputs={inputs}
        submitButtonText="Log in"
      />

      <form>
        <HorizontalText />
        <MyText>
          New to Elpida?
          <MyText to="/signup" variant="link" element="link">
            Sign up
          </MyText>
        </MyText>
      </form>
    </FormWrap>
  );
};

export default LoginPage;
