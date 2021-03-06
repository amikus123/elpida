import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PUBLIC_ROUTES } from "../../../../constans/routes";
const CustomLink = styled(Link)`
  font-size: 0.875rem;
  color: #fff;
  margin: 5px 0;
  white-space: pre-wrap;
  padding: 8px;
  &:hover {
    outline: 1px solid #fff;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Returns = () => {
  return (
    <CustomLink to={PUBLIC_ROUTES.ORDERS}>
      Returns <br />
      <Bold>&&nbsp;Orders</Bold>
    </CustomLink>
  );
};

export default Returns;
