import { useContext } from "react";
import * as Yup from "yup";
import FormWrap from "../../components/containers/FormWrap"
import HorizontalText from "../../components/core/Dividers/HorizontalText";
import FormikForm, { InputData } from "../../components/core/Form/FormikForm";
import MyText from "../../components/core/Text/MyText";
import { UserContext } from "../../context/UserContext";

const SignupPage = () => {
  const { signup } = useContext(UserContext);
  
  const onSubmit = async (e: Record<string, string>) => {
    return  await signup(e.email, e.password);
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
      <FormikForm onSubmit={onSubmit} inputs={inputs} submitButtonText="Sign up"/>
      

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
