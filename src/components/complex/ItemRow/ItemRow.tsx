import React from "react";
import ItemRowCarousel from "./ItemRowCarousel";
import MyText from "../../core/Text/MyText";
import styled from "styled-components";
import { RowContent } from "../../../types";

interface ItemRowProps {
  data: RowContent;
}
const Wrapper = styled.div`
  background-color: #fff;
  padding: 1rem;
  // prvides opacity change to arrows
  &:hover * {
    opacity: 1;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  & > :first-child {
    margin-right: 1rem;
  }
`;
const CarouselWrapper = styled.div``;

const ItemRow = ({ data }: ItemRowProps) => {
  const { products, extraPath, header, showLink } = data;
  return (
    <Wrapper>
      <TextWrapper>
        <MyText>{header}</MyText>
        {showLink ? <MyText element="link">Shop now</MyText> : null}
      </TextWrapper>
      <CarouselWrapper>
        <ItemRowCarousel products={products} extraPath={extraPath} />
      </CarouselWrapper>
    </Wrapper>
  );
};

export default ItemRow;
