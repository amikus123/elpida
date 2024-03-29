import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../../constans/routes";

interface LogoProps {
  showText?: boolean;
}
const LogoText = styled(Link)`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem;
  &:hover {
    outline: 1px solid #fff;
  }
`;
const Logo = ({ showText = true }: LogoProps) => {
  return <LogoText to={PUBLIC_ROUTES.HOME}>Elpida</LogoText>;
};

export default Logo;
