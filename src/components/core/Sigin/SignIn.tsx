import React from "react";
import styled from "styled-components";
import PlainButton from "../Buttons/PlainButton";
import MyText from "../Text/MyText";

const Wrap = styled.div`
  flex: 1;
  padding: 10px 20px;
  display: flex;
  height: 150px;
  font-size: 13px;
  flex-direction: column;
  /* align-items: center */
  justify-content: space-evenly;
  background-color: white;
`;

const SignIn = () => {
  return (
    <Wrap>
      <MyText variant="header" fontSize="21px">
        Sign in for the best experience
      </MyText>
      <PlainButton text="Sign in securely" />
    </Wrap>
  );
};

export default SignIn;
