import React from "react";
import styled from "styled-components";
import Cards from "../../../components/complex/Cards/Cards";
import ItemRow from "../../../components/complex/ItemRow/ItemRow";
import { firtsRow, secondRow } from "../../../constans/homeCards";
import { bestSellersRowData } from "../../../constans/rowData";
import PageCenterWrap from "../../../components/containers/PageCenterWrap";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

const ContentWrap = styled.div`
  margin-top: 250px;
  z-index: 10;
  position: relative;
  & > * {
    margin-top: 1rem;
  }
`;

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
