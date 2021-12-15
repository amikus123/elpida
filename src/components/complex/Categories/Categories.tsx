import React from "react";
import styled from "styled-components";
import { CardData } from "../../../constans/types";
import { nameToPublicLink } from "../../../utils/imageFunctions";
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

const categoryStaticData = {
  "beer": {
    image: nameToPublicLink("beer", "/categories"),
    bottomText: "16",
    title: "Beers",
    link: "categories/beer",
  },
  "wine": {
    image: nameToPublicLink("wine", "/categories"),
    bottomText: "16",
    title: "Wines",
    link: "categories/wine",
  },
}

// displays cards 
const Categories = ({data}:CategoriesProps) => {
  const getCategoryData = (key)=>{
    if(key in categoryStaticData){
      const res = {...categoryStaticData[key]}
      res.bottomText = data[key].length
      return res
    }else{
      throw new Error("wrong")
    }
  }
  return (
    <Wrap>
      {Object.keys(data).map((key, index) => {
        
        return <CategoryItem item={getCategoryData(key)} key={index} />;
      })}
    </Wrap>
  );
};

export default Categories;
