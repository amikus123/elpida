import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

import styled from "styled-components";
import HiddenLogin from "./List/HiddenLogin";
import { OverlayContext } from "../../context/OverlayContext";
const Wrapper = styled.div`
  margin: 5px 0;
  padding: 8px;
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    & div {
      visibility: visible !important;
    }
  }
`;
const CustomLink = styled(Link)`
  font-size: 0.875rem;
  color: #fff;
  white-space: pre-wrap;
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
  const { setOverlay } = useContext(OverlayContext);

  return (
    <Wrapper
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      <CustomLink to="/orders">
        Hello, Sign in <br />
        <Bold>
          Account & Lists <FaCaretDown />
        </Bold>
      </CustomLink>
      <HiddenLogin />
    </Wrapper>
  );
};

export default Login;
