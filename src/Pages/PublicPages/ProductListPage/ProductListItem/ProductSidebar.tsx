import React from "react";
import styled from "styled-components";
import PlainButton from "../../../../components/core/Buttons/PlainButton";
import { COLORS } from "../../../../styles/styleValues";
import { ItemData } from "../tmpConst";
import MyText from "../../../../components/core/Text/MyText";
import PhoneCall from "./PhoneCall";

interface ProductListItemProps {
  price: number;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1rem;
  border-left: 1px solid ${COLORS.grey};
  > * {
    margin-bottom: 0.5rem;
  }
`;
const ProductSidebar = ({ price }: ProductListItemProps) => {
  return (
    <Wrap>
      <MyText fontSize="1.25rem">Price: {price}zl</MyText>
      <MyText>Arrives: Nov 25 - Dec 6</MyText>
      <PlainButton text="Add to Cart"></PlainButton>
      <PlainButton text="Buy now"></PlainButton>

      <PhoneCall />
    </Wrap>
  );
};

export default ProductSidebar;
