import React from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

import styled from "styled-components";
import HiddenLogin from "./List/HiddenLogin";
const CustomLink = styled(Link)`
  font-size: 0.875rem;
  color: #fff;
  margin: 5px 0;
  white-space: pre-wrap;
  padding: 8px;
  position: relative;
  &:hover {
    outline: 1px solid #fff;
  }
`;
const Bold = styled.span`
  font-weight: bold;
  color: #fff;
  display: flex;
  min-height: 17.33px;
  align-items: center;
`;

const Login = () => {
  return (
    <CustomLink to="/orders">
      Hello, Sign in <br />
      <Bold>
        Account & Lists <FaCaretDown />
      </Bold> 
      
      <HiddenLogin/>
    </CustomLink>
  );
};

export default Login;
