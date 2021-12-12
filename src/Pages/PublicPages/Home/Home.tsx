import React, { useContext } from "react";
import styled from "styled-components";
import Cards from "../../../components/complex/Cards/Cards";
import ItemRow from "../../../components/complex/ItemRow/ItemRow";
import PageCenterWrap from "../../../components/containers/PageCenterWrap";
import { RowItem, RowContent } from "../../../constans/types";
import { DataContext } from "../../../context/DataContext";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

const ContentWrap = styled.div`
  margin-top: 250px;
  z-index: 10;
  position: relative;
  & > * {
    margin-top: 1rem;
  }
`;



const bestSellersProducts: RowItem[] = [
  {
    image: "coffe",
    link: "#",
  },
  { image: "jenga", link: "$" },
];

const bestSellersRowData: RowContent = {
  extraPath: "rows/bestSellers",
  products: bestSellersProducts,
  header: "Best Sellers",
  showLink: true,
};

const Home = () => {
  const {objectsToDisplay} = useContext(DataContext)

  return (
    <PageCenterWrap>
      <HomeCarousel />
      <ContentWrap>
        <Cards data={objectsToDisplay.cardGroups[0]} />
        <ItemRow data={bestSellersRowData} />
        <Cards data={objectsToDisplay.cardGroups[1]} />
      </ContentWrap>
    </PageCenterWrap>
  );
};

export default Home;
