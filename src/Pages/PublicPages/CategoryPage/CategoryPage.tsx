import React from "react";
import MyText from "../../../components/core/Text/MyText";
import styled from "styled-components";
import Categories from "../../../components/complex/Categories/Categories";
import PageCenterWrap from "../../../components/containers/PageCenterWrap";
import MyBreadcrumbs from "../../../components/core/Breadcrumbs/MyBreadcrumbs";
import { CardData } from "../../../types";
import { nameToPublicLink } from "../../../utils/imageFunctions";
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
// on this page user can see all categories which are avaliabile at store,
// and can click on card to be taken to page that lists all item of given category

// TODO change to dynamic
const categories: CardData[] =  [
  {
    imageName: nameToPublicLink("agd", "/categories"),
    bottomText: "6",
    topText: "AGD",
    link: "categories/agd",
  },
  {
    imageName: nameToPublicLink("electronics", "/categories"),
    bottomText: "16",
    topText: "Electronics",
    link: "categories/electronics",
  },
  {
    imageName: nameToPublicLink("clothing", "/categories"),
    bottomText: "16",
    topText: "Clothing",
    link: "categories/clothing",
  },
  {
    imageName: nameToPublicLink("clothing", "/categories"),
    bottomText: "16",
    topText: "Clothing",
    link: "categories/clothing",
  },
  {
    imageName: nameToPublicLink("clothing", "/categories"),
    bottomText: "16",
    topText: "Clothing",
    link: "categories/clothing",
  },
  {
    imageName: nameToPublicLink("clothing", "/categories"),
    bottomText: "16",
    topText: "Clothing",
    link: "categories/clothing",
  },
];


const CategoryPage = () => {
  return (
    <Wrap>
      <MyBreadcrumbs />
      <MyText fontSize="2rem" element="h3">
        Categories{" "}
        <MyText element="span" fontSize="0.85em" presetColor="grey">
          ({categories.length})
        </MyText>
      </MyText>
      <Categories  data={categories}/>
    </Wrap>
  );
};

export default CategoryPage;
