import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
const imagePaths = [0, 1, 2, 3, 4, 5];
const HomeCarousel = () => {
  return (
    <Wrapper>
      <Carousel infiniteLoop={true} showStatus={false} showIndicators={false}>
        {imagePaths.map((item, index) => {
          return <CarouselItem key={index} value={item} />;
        })}
      </Carousel>
    </Wrapper>
  );
};

export default HomeCarousel;
