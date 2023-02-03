import React from "react";
import ItemRowCarousel from "./ItemRowCarousel";
import MyText from "../../core/Text/MyText";
import styled from "styled-components";
import { ItemProperties } from "../../../context/DataContext";

interface ItemRowProps {
  data: ItemProperties[];
  topText: string;
}
const Wrapper = styled.div`
  background-color: #fff;
  padding: 1rem;
  // provides opacity change to arrows
  &:hover * {
    opacity: 1;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-bottom: 16px;
`;
const CarouselWrapper = styled.div``;

const ItemRow = ({ data, topText = "Our bestsellers" }: ItemRowProps) => {
  return (
    <Wrapper>
      <TextWrapper>
        <MyText>{topText}</MyText>
      </TextWrapper>
      <CarouselWrapper>
        <ItemRowCarousel products={data} />
      </CarouselWrapper>
    </Wrapper>
  );
};

export default ItemRow;
