import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import beauty from "../../images/carousel/beauty.jpg";
import christmas from "../../images/carousel/christmas.jpg";
import computers from "../../images/carousel/computers.jpg";
import ikea from "../../images/carousel/ikea.jpg";
import ship from "../../images/carousel/ship.jpg";
import toys from "../../images/carousel/toys.jpg";
interface CarouselProps {
  value: number;
}
const getImg = (value: number) => {
  switch (value) {
    case 0:
      return beauty;
    case 1:
      return christmas;
    case 2:
      return computers;
    case 3:
      return ikea;
    case 4:
      return ship;
    default:
      return toys;
  }
};

const Wrapper = styled.div`
  max-width: 1500px;
  height: 250px;
  position: relative;

`;

const Img = styled.img`
  position: absolute;
  top:0;
  left:0;
`;
const CarouselItem = ({ value }: CarouselProps) => {
  return (
    <Wrapper>
      <Img src={getImg(value)} alt="discount announjcment" />
    </Wrapper>
  );
};

export default CarouselItem;
