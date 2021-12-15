import React, { useContext } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";
import { DataContext } from "../../../../context/DataContext";

const Wrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: visible;
  height: 600px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  
  /* overflow: hidden; */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  & * {
    overflow: visible !important;
  }
`;
const HomeCarousel = () => {
  const { contentData } = useContext(DataContext);
  return (
    <Wrapper>
      <Carousel infiniteLoop={true} showStatus={false} showIndicators={false}>
        {contentData.homeImages.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              image={item.image}
              link={item.link}
              alt={item.link}
            />
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

export default HomeCarousel;
