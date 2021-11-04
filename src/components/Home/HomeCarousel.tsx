import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";

const Wrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: visible;
  flex:1;
  height:600px;
  position: absolute;
  top:0;
  left:0;
  /* overflow: hidden; */ 

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar{
    display: none;

  }
  & * {
    overflow: visible !important;
  }
`;
const iamgeNames = ["beauty","christmas","computers","ikea","ship","toys"];
const HomeCarousel = () => {
  return (
    <Wrapper>
      <Carousel infiniteLoop={true} showStatus={false} showIndicators={false}>
        {iamgeNames.map((item, index) => {
          return <CarouselItem key={index} imageName={item} extraPath="homeCarousel/" />;
        })}
      </Carousel>
    </Wrapper>
  );
};

export default HomeCarousel;
