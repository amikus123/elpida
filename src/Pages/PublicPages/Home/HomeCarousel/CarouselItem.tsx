import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  max-width: 1500px;
  height: 250px;
  position: relative;
  display: block;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;
interface CarouselProps {
  image: string;
  link: string;
  alt: string;
}
const CarouselItem = ({ image, link, alt }: CarouselProps) => {
  return (
    <Wrapper to={link}>
      <Img src={image} alt={alt} />
    </Wrapper>
  );
};

export default CarouselItem;
