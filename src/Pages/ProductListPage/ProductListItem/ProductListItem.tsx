import React from "react";
import { ItemData } from "../tmpConst";
import Text from "../../../components/core/Text/Text";
import Rating from "./Rating";
import ProductDescription from "./ProductDescription";
import ProductSidebar from "./ProductSidebar";
import styled from "styled-components";
import { COLORS } from "../../../styles/styleValues";

interface ProductListItemProps {
  item: ItemData;
}
const Wrap = styled.section`
  border: 1px solid ${COLORS.grey};
  display: flex;
  flex-direction: row;
  font-size: 1.125rem;

`;
const DescrtiptionWrap = styled.div`
  padding: 1rem;

  flex: 1;
`;
const ProductListItem = ({ item }: ProductListItemProps) => {
  const { title, price, rating, ratingCount, id, image, linkToPage } = item;
  return (
    <Wrap>
      <DescrtiptionWrap>
        <Text element="h3" fontSize="2em">
          {title}
        </Text>
        <div>
          <Rating rating={rating} ratingCount={ratingCount} productCode={id} />
        </div>
        <ProductDescription />
      </DescrtiptionWrap>
      <ProductSidebar item={item} />
    </Wrap>
  );
};

export default ProductListItem;
