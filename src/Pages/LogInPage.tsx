import React, { useState } from "react";
import styled from "styled-components";

import PlainButton from "../components/core/Buttons/PlainButton";
import HorizontalText from "../components/core/Dividers/HorizontalText";
import TextInput from "../components/core/Inputs/TextInput";
import Text from "../components/core/Text/Text";
const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Text variant="header" element="h1" fontSize="2rem">
        Log in
      </Text>
      <form>
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

        <PlainButton text="Log in" variant="submit" />
        <HorizontalText />
        <Text>
          New to Elpida? {" "}
          <Text to="/signup" variant="link" element="link">
            Sign up
          </Text>
        </Text>
      </form>
    </Wrapper>
  );
};

export default LogInPage;
