import React from "react";
import styled from "styled-components";
import Cards from "../components/Home/Cards/Cards"
import HomeCarousel from "../components/Home/HomeCarousel";
import ItemRow from "../components/Home/ItemRow/ItemRow";
import { firtsRow, secondRow } from "../constans/homeCards";
import { bestSellersRowData } from "../constans/rowData";
const Wrap = styled.div`
  margin: 0 auto;
  padding : 0 2rem;
  max-width: 1500px;
  overflow-x: hidden;
  position: relative;
  display:flex;
  justify-content: center;
  flex-direction: column;
  & > :nth-child(2) {
    margin-top: 250px;
    z-index: 10;
    position: relative;
  }
`;
const Home = () => {
  return (
    <Wrap>
      <HomeCarousel />
      <Cards data={firtsRow} />
      <ItemRow  data={bestSellersRowData} />
      <Cards data={secondRow} />
    </Wrap>
  );
};

export default Home;
