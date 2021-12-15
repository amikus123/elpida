import React from "react";
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

interface CategoriesProps{
  data:Record<string, any>
}
// displays cards 
const Categories = ({data}:CategoriesProps) => {
  return (
    <Wrap>
      {data.map((item, index) => {
        return <CategoryItem item={item} key={index} />;
      })}
    </Wrap>
  );
};

export default Categories;
