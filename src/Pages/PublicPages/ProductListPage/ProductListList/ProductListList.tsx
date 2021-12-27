import React from "react";
import styled from "styled-components";
import Spinner from "../../../../components/core/Loading/Spinner";
import MyText from "../../../../components/core/Text/MyText";
import { ItemProperties } from "../../../../context/DataContext";
import ProductListItem from "../ProductListItem/ProductListItem";

const Wrap = styled.div`
  flex: 1;
  min-height: 100px;
  min-width: 100px;
  @media (max-width:1000px){
    width:100%;
  }
`;
interface ProductListListProps {
  items: ItemProperties[];
  categoryName: string;
  filterSettings: Record<string, string[] | number[]>;
}

const ProductListList = ({
  items,
  categoryName,
  filterSettings,
}: ProductListListProps) => {
  const getZeroElements = () => {
    if (Object.keys(filterSettings).length === 0) {
      return <Spinner showText={true} />;
    } else {
      return (
        <MyText fontSize="3rem" style={{ textAlign: "center" }}>
          No items found for current settings
        </MyText>
      );
    }
  };
  return (
    <Wrap>
      {items !== undefined && items.length > 0
        ? items.map((item, index) => {
            return (
              <ProductListItem
                item={item}
                key={index}
                categoryName={categoryName}
              />
            );
          })
        : getZeroElements()}
    </Wrap>
  );
};

export default ProductListList;
