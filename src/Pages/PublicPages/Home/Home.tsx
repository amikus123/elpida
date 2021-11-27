import React from "react";
import styled from "styled-components";
import Cards from "../../../components/complex/Cards/Cards";
import ItemRow from "../../../components/complex/ItemRow/ItemRow";
import PageCenterWrap from "../../../components/containers/PageCenterWrap";
import { RowItem, RowContent, CardArr } from "../../../types";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

const ContentWrap = styled.div`
  margin-top: 250px;
  z-index: 10;
  position: relative;
  & > * {
    margin-top: 1rem;
  }
`;
const firtsRow: CardArr = [
  {
    topText: "AmazonBasics",
    imageName: "amazonBasics",
    bottomText: "See more",
    link: "/",
  },
  {
    topText: "Easy Returns",
    imageName: "easyReturns",
    bottomText: "Learn more",
    link: "/",
  },
  {
    topText: "Easy Returns",
    imageName: "easyReturns",
    bottomText: "Learn more",
    link: "/",
  },
  {
    topText: "Easy Returns",
    imageName: "easyReturns",
    bottomText: "Learn more",
    link: "/",
  },
];

const secondRow: CardArr = [
  {
    topText: "AmazonBasics",
    imageName: "amazonBasics",
    bottomText: "See more",
    link: "/",
  },
  {
    topText: "Easy Returns",
    imageName: "easyReturns",
    bottomText: "Learn more",
    link: "/",
  },

  {
    topText: "Easy Returns",
    imageName: "easyReturns",
    bottomText: "Learn more",
    link: "/",
  },

  {
    signIn: true,
    addName: "ad1",
  },
];

const bestSellersProducts: RowItem[] = [
  {
    imageName: "coffe",
    link: "#",
  },
  { imageName: "jenga", link: "$" },
];

const bestSellersRowData: RowContent = {
  extraPath: "rows/bestSellers",
  products: bestSellersProducts,
  header: "Best Sellers",
  showLink: true,
};

const Home = () => {
  return (
    <PageCenterWrap>
      <HomeCarousel />
      <ContentWrap>
        <Cards data={firtsRow} />
        <ItemRow data={bestSellersRowData} />
        <Cards data={secondRow} />
      </ContentWrap>
    </PageCenterWrap>
  );
};

export default Home;
