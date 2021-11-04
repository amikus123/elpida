import React from "react";
import { RowContent } from "../../../constans/rowData";
import ItemRowCarousel from "./ItemRowCarousel";
import Text from "../../../components/core/Text/Text";
import styled from "styled-components";

interface ItemRowProps {
  data: RowContent;
}
const Wrapper = styled.div`
  background-color: #fff;
  padding: 1rem;
  // prvides opacity change to arrows
  &:hover *{
    opacity:1;
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
        <Text>{header}</Text>
        {showLink ? <Text element="link">Shop now</Text> : null}
      </TextWrapper>
      <CarouselWrapper>
        <ItemRowCarousel products={products} extraPath={extraPath} />
      </CarouselWrapper>
    </Wrapper>
  );
};

export default ItemRow;
