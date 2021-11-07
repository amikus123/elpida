import React from "react";
import styled from "styled-components";

const Spin = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(61, 40, 40, 0.3);
  border-radius: 50%;
  border-top-color: #354e92;
  animation: spin 1s ease-in-out infinite;
  margin:0 auto;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
 
`;
const Spinner = () => {
  return <Spin></Spin>;
};

export default Spinner;
