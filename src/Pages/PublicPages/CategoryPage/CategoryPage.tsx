import React,{useContext} from "react";
import MyText from "../../../components/core/Text/MyText";
import styled from "styled-components";
import Categories from "../../../components/complex/Categories/Categories";
import {
  PageCenterWrapWithBread,
} from "../../../components/containers/PageCenterWrap";
import {DataContext} from "../../../context/DataContext"
import { nameToPublicLink } from "../../../utils/imageFunctions";
const Wrap = styled(PageCenterWrapWithBread)`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;

  padding-bottom: 3rem;
`;

// on this page user can see all categories which are avaliabile at store,
// and can click on card to be taken to page that lists all item of given category
const categoryStaticData = {
  "beer": {
    image: nameToPublicLink("beer", "/categories"),
    title: "Beers",
    link: "/categories/beer",
  },
  "wine": {
    image: nameToPublicLink("wine", "/categories"),
    title: "Wines",
    link: "/categories/wine",
  },
}

const CategoryPage = () => {
  const {contentData} = useContext(DataContext)

  const getCategoryData = ()=>{
    const data = contentData.inventory
    const keys = Object.keys(data)
    const arr = []   
    keys.forEach((key)=>{
      if(key in categoryStaticData){
        const res = {...categoryStaticData[key]}
        res.bottomText = data[key].length
        arr.push(res)
      }
    }) 
    return arr
  }

  return (
    <Wrap>
      <MyText fontSize="2rem" element="h3">
        Categories{" "}
        <MyText element="span" fontSize="0.85em" presetColor="grey">
          ({Object.keys(contentData.inventory).length})
        </MyText>
      </MyText>
      <Categories data={getCategoryData()} />
    </Wrap>
  );
};

export default CategoryPage;
