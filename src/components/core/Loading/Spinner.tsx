import React from "react";
import styled from "styled-components";
import MyText from "../Text/MyText";

const Spin = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(61, 40, 40, 0.3);
  border-radius: 50%;
  border-top-color: #354e92;
  animation: spin 1s ease-in-out infinite;
  margin: 0 auto;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Wrap = styled.div``;
interface SpinnerProps {
  showText?: boolean;
}
const Spinner = ({ showText = false }: SpinnerProps) => {
  return (
    <Wrap>
      <Spin></Spin>
      {showText ? (
        <MyText
          style={{ padding: "1rem", textAlign: "center" }}
          fontSize="1.5rem"
        >
          Loading...
        </MyText>
      ) : null}
    </Wrap>
  );
};

export default Spinner;
