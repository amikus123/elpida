import React from "react";
import styled from "styled-components";
import { nameToPublicLink } from "../../../utils/imageFunctions";

interface CarouselProps {
  imageName: string;
  extraPath: string;
}

const Wrapper = styled.div`
  max-width: 1500px;
  height: 250px;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;
const CarouselItem = ({ imageName, extraPath }: CarouselProps) => {
  return (
    <Wrapper>
      <Img src={nameToPublicLink(imageName, extraPath)} alt={imageName} />
    </Wrapper>
  );
};

export default CarouselItem;
