import React from "react";
import styled from "styled-components";
import { CardData } from "../../../constans/types";
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
  data:CardData[]
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
