import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

import styled from "styled-components";
import { ElementContext } from "../../../../context/ElementContext";
import HiddenLogin from "../List/HiddenLogin";
import { SIZES } from "../../../../styles/styleValues";
import { UserContext } from "../../../../context/UserContext";
const Wrapper = styled.div`
  margin: 5px 0;
  padding: 8px;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: ${SIZES.TABLET}) {
    position: initial;
  }
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
  padding: 0.5rem;
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
  @media (max-width: ${SIZES.TABLET}) {
    display: none;
  }
`;
const Login = () => {
  const { setOverlay } = useContext(ElementContext);
  const { currentUser } = useContext(UserContext);

  return (
    <Wrapper
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      {/* \xa0 is nbsp */}
      <CustomLink to="/orders">
        {currentUser === null ? "Hello," : "You\xa0are logged\xa0in"}
      
      <Bold>
        {currentUser===null?"Sign\xa0in":<>Account & Lists <FaCaretDown /></>}
         
        </Bold>
      </CustomLink>
      <HiddenLogin />
    </Wrapper>
  );
};

export default Login;
