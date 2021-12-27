import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../../styles/styleValues";
import MyText from "../../../../components/core/Text/MyText";
import PhoneCall from "./PhoneCall";
import { ItemProperties } from "../../../../context/DataContext";
import AddToCart from "../../../../components/core/Buttons/SmartButtons/AddToCart";

interface ProductListItemProps {
  price: number;
  item: ItemProperties;
  link: string;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  font-size: 1rem;
  border-left: 1px solid ${COLORS.grey};
  @media (max-width: 640px) {
    padding: 0rem 1rem 1rem;
    border-left: 0px solid ${COLORS.grey};
  }
  > * {
    margin-bottom: 0.5rem;
  }
`;
const ProductSidebar = ({ price, item, link }: ProductListItemProps) => {
  return (
    <Wrap>
      <MyText fontSize="1.25rem">Price: {price}zl</MyText>
      <AddToCart item={item} link={link} text="Add to Cart" />
      <AddToCart item={item} link={link} text="Buy now" checkout={true} />

      <PhoneCall />
    </Wrap>
  );
};

export default ProductSidebar;
