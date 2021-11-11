import React from "react";
import styled from "styled-components";
import PlainButton from "../../../components/core/Buttons/PlainButton";
import { COLORS } from "../../../styles/styleValues";
import { ItemData } from "../tmpConst";
import Text from "../../../components/core/Text/Text";
import PhoneCall from "./PhoneCall";

interface ProductListItemProps {
  item: ItemData;
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
const ProductSidebar = ({ item }: ProductListItemProps) => {
  const { title, price, rating, ratingCount, id, image, linkToPage } = item;

  return (
    <Wrap>
      <Text fontSize="1.25rem">Price: {price}zl</Text>
      <PlainButton  text="Add to Cart"></PlainButton>
      <PhoneCall />
    </Wrap>
    
  );
};

export default ProductSidebar;
