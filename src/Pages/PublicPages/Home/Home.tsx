import React, { useContext } from "react";
import styled from "styled-components";
import Cards from "../../../components/complex/Cards/Cards";
import ItemRow from "../../../components/complex/ItemRow/ItemRow";
import PageCenterWrap from "../../../components/containers/PageCenterWrap";
import Spinner from "../../../components/core/Loading/Spinner";
import { DataContext } from "../../../context/DataContext";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

const ContentWrap = styled.div`
  margin-top: 250px;
  margin-bottom: 32px;
  z-index: 10;
  position: relative;
  @media (max-width: 1000px) {
    margin-top: 150px;
  }
  @media (max-width: 700px) {
    margin-top: 125px;
  }
  @media (max-width: 600px) {
    margin-top: 0;
  }
  & > * {
    margin-top: 1rem;
  }
`;
const Wrap = styled.div`
  padding-top: 1rem;
`;

const Home = () => {
  const { contentData } = useContext(DataContext);

  return (
    <PageCenterWrap>
      {contentData.cardGroups[0].length !== 0 ? (
        <>
          <HomeCarousel />
          <ContentWrap>
            <Cards data={contentData.cardGroups[0]} />
            <ItemRow
              data={contentData.bestSellers[0]}
              topText="Our bestsellers"
            />
            <Cards data={contentData.cardGroups[1]} />
          </ContentWrap>
        </>
      ) : (
        <Wrap>
          <Spinner showText />
        </Wrap>
      )}
    </PageCenterWrap>
  );
};

export default Home;
