import React from "react";
import styled from "styled-components";
import Cards from "../components/Home/Cards/Cards";
import HomeCarousel from "../components/Home/HomeCarousel";
import ItemRow from "../components/Home/ItemRow/ItemRow";
import { firtsRow, secondRow } from "../constans/homeCards";
import { bestSellersRowData } from "../constans/rowData";
import PageCenterWrap from "../containers/PageCenterWrap";

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
