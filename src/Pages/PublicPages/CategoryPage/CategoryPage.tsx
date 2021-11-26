import React from "react";
import { Link } from "react-router-dom";
import MyText from "../../../components/core/Text/MyText";
import styled from "styled-components";
import Categories from "../../../components/complex/Categories/Categories";
import PageCenterWrap from "../../../components/containers/PageCenterWrap";
import { categories } from "../../../constans/categories";
import Breadcrumbs from "../../../components/core/Breadcrumbs/Breadcrumbs";
const Wrap = styled(PageCenterWrap)`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  & > * {
    padding-top: 0.5rem;
  }
  padding-bottom: 3rem;
`;

const CategoryPage = () => {
  return (
    <Wrap>
      <Breadcrumbs />
      <MyText fontSize="2rem" element="h3">
        Categories{" "}
        <MyText element="span" fontSize="0.85em" presetColor="grey">
          ({categories.length})
        </MyText>
      </MyText>
      <Categories />
    </Wrap>
  );
};

export default CategoryPage;
