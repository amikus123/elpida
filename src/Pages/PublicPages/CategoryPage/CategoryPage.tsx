import React from "react";
import MyText from "../../../components/core/Text/MyText";
import styled from "styled-components";
import Categories from "../../../components/complex/Categories/Categories";
import PageCenterWrap, {
  PageCenterWrapWithBread,
} from "../../../components/containers/PageCenterWrap";
import MyBreadcrumbs from "../../../components/core/Breadcrumbs/MyBreadcrumbs";
import { CardData } from "../../../constans/types";
import { nameToPublicLink } from "../../../utils/imageFunctions";
const Wrap = styled(PageCenterWrapWithBread)`
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
const categories: CardData[] = [
  {
    image: nameToPublicLink("agd", "/categories"),
    bottomText: "6",
    title: "AGD",
    link: "categories/agd",
  },
  {
    image: nameToPublicLink("electronics", "/categories"),
    bottomText: "16",
    title: "Electronics",
    link: "categories/electronics",
  },
  {
    image: nameToPublicLink("clothing", "/categories"),
    bottomText: "16",
    title: "Clothing",
    link: "categories/clothing",
  },
  {
    image: nameToPublicLink("clothing", "/categories"),
    bottomText: "16",
    title: "Clothing",
    link: "categories/clothing",
  },
  {
    image: nameToPublicLink("clothing", "/categories"),
    bottomText: "16",
    title: "Clothing",
    link: "categories/clothing",
  },
  {
    image: nameToPublicLink("clothing", "/categories"),
    bottomText: "16",
    title: "Clothing",
    link: "categories/clothing",
  },
];

const CategoryPage = () => {
  return (
    <Wrap>
      <MyText fontSize="2rem" element="h3">
        Categories{" "}
        <MyText element="span" fontSize="0.85em" presetColor="grey">
          ({categories.length})
        </MyText>
      </MyText>
      <Categories data={categories} />
    </Wrap>
  );
};

export default CategoryPage;
