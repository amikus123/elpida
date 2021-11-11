import React from "react";
import { ItemData } from "../tmpConst";
import Text from "../../../components/core/Text/Text";
import Rating from "./Rating";
import ProductDescription from "./ProductDescription";
import ProductSidebar from "./ProductSidebar";
import styled from "styled-components";
import { COLORS } from "../../../styles/styleValues";
import { Link } from "react-router-dom";

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
  const { title, rating, ratingCount, id, images, linkToPage,properties,price } = item;

  return (
    <Wrap  >
      <DescrtiptionWrap>
        <Text  fontSize="2em" to={linkToPage}>
          {title}
        </Text>
        <div>
          <Rating rating={rating} ratingCount={ratingCount} productCode={id} />
        </div>
        <ProductDescription images={images}  properties={properties}/>
      </DescrtiptionWrap>
      <ProductSidebar price={price}/>
    </Wrap>
  );
};

export default ProductListItem;
