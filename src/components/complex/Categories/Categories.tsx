import React from "react";
import styled from "styled-components";
import { CardData } from "../../../constans/types";
import Spinner from "../../core/Loading/Spinner";
import CategoryItem from "./CategoryItem";

const Wrap = styled.div`
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  & > :hover {
    transform: scale(1.05);
  }
`;

interface CategoriesProps {
  data: CardData[];
}
const Categories = ({ data }: CategoriesProps) => {
  return (
    <>
      {data.length === 0 ? (
        <Spinner showText={true} />
      ) : (
        <Wrap>
          {data.map((item, index) => {
            return <CategoryItem item={item} key={index} />;
          })}
        </Wrap>
      )}
    </>
  );
};

export default Categories;
