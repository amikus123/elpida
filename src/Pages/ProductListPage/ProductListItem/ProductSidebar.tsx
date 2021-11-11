import React from "react";
import styled from "styled-components";
import PlainButton from "../../../components/core/Buttons/PlainButton";
import { COLORS } from "../../../styles/styleValues";
import { ItemData } from "../tmpConst";
import Text from "../../../components/core/Text/Text";
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
  >*{
    margin-bottom:0.5rem;
  }
`;
const ProductSidebar = ({ price }: ProductListItemProps) => {

  return (
    <Wrap>
      <Text fontSize="1.25rem">Price: {price}zl</Text>
      <Text >Arrives: Nov 25 - Dec 6</Text>
      <PlainButton  text="Add to Cart"></PlainButton>
      <PlainButton  text="Buy now"></PlainButton>

      <PhoneCall />
    </Wrap>

  );
};

export default ProductSidebar;
