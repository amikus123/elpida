import React from "react";
import { Link } from "react-router-dom";
import Text from "../../components/core/Text/Text";
import styled from "styled-components";
import Categories from "./Categories";
import PageCenterWrap from "../../containers/PageCenterWrap";
import { categories } from "../../constans/categories";
import Breadcrumbs from "../../components/core/Breadcrumbs/Breadcrumbs";
const Wrap = styled(PageCenterWrap)`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items:flex-start;
  &>*{
    padding-top: 0.5rem;;
  };
  padding-bottom:3rem;
`;
const greyStyle = {
  color: "#888",
  fontSize: "0.85em",
};

const CategoryPage = () => {
  return (
    <Wrap>
      <Breadcrumbs />
      <Text fontSize="2rem" element="h3">
        Categories{" "}
        <Text element="span" style={greyStyle}>
          ({categories.length})
        </Text>
      </Text>
      <Categories />
    </Wrap>
  );
};

export default CategoryPage;
