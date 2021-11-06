import React, { useContext, useState } from "react";
import styled from "styled-components";

import PlainButton from "../components/core/Buttons/PlainButton";
import HorizontalText from "../components/core/Dividers/HorizontalText";
import FormCreator, { InputData } from "../components/core/Form/FormCreator";
import TextInput from "../components/core/Inputs/TextInput";
import Text from "../components/core/Text/Text";
import { UserContext } from "../context/UserContext";
const SignUpPage = () => {
  const base: InputData[] = [
    {
      type: "text",
      state: "",
      error: "",
    },
    {
      type: "password",
      state: "",
      error: "",
    },
  ];
  const [inputs, setInputs] = useState<InputData[]>(base);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp } = useContext(UserContext);
  const [passwordError, setPasswordError] = useState("");

  const createFormDataObject = (
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    inputs: InputData[],
    setFormData: React.Dispatch<React.SetStateAction<InputData[]>>
  ) => {
    return {
      handleSubmit,
      inputs,
      setFormData
    }
  };
  const validateData = (pass1: string, pass2: string) => {
    if (pass1 !== pass2) {
      return false;
    }
    return true;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateData(password, confirmPassword)) {
      try {
        signUp(email, password);
      } catch (e) {}
    } else {
      // setting error
      setPasswordError("Passwords dont match");
    }
  };
  const Wrapper = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    margin: 5rem auto;
    max-width: 500px;
    width: 100%;
    background-color: white;
    padding: 1.5rem;
    /* border:1px solid  #007185; */
    border-radius: 8px;

    & > form {
      width: 100%;
      & > * {
        margin-top: 1rem;
      }
    }
  `;
  return (
    <Wrapper>
      <FormCreator setFormData={setInputs} handleSubmit={handleSubmit} inputs={inputs}/>
      <Text variant="header" element="h1" fontSize="2rem">
        Sign up
      </Text>
      <form onSubmit={handleSubmit}>
        <div>
          <TextInput
            state={email}
            setState={setEmail}
            inputId="email"
            labelText="Email"
          />
        </div>
        <div>
          <TextInput
            state={password}
            setState={setPassword}
            inputId="password"
            labelText="Password"
          />
        </div>

        <div>
          <TextInput
            state={confirmPassword}
            setState={setConfirmPassword}
            inputId="passwordConfirm"
            labelText="Confirm Password"
          />
        </div>

        <PlainButton text="Sign in" variant="submit" />
        <HorizontalText />
        <Text>
          Already have an acccount?{" "}
          <Text to="/login" variant="link" element="link">
            Log in
          </Text>
        </Text>
      </form>
    </Wrapper>
  );
};

export default SignUpPage;
