import React, { useContext } from "react";
import styled from "styled-components";
import Cards from "../../../components/complex/Cards/Cards";
import ItemRow from "../../../components/complex/ItemRow/ItemRow";
import PageCenterWrap from "../../../components/containers/PageCenterWrap";
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






const Home = () => {
  const {contentData} = useContext(DataContext)

  return (
    <PageCenterWrap>
      <HomeCarousel />
      <ContentWrap>
        <Cards data={contentData.cardGroups[0]} />
        <ItemRow data={contentData.bestSellers[0]} topText="Our bestsellers"/>
        <Cards data={contentData.cardGroups[1]} />
      </ContentWrap>
    </PageCenterWrap>
  );
};

export default Home;
