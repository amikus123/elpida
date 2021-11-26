import React from "react";
import { categories } from "../../../constans/categories";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  & > :hover {
    transform: scale(1.05);
  }
`;

const Categories = () => {
  return (
    <Wrap>
      {categories.map((item, index) => {
        return <CategoryItem item={item} key={index} />;
      })}
    </Wrap>
  );
};

export default Categories;
