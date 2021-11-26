import React from "react";
import styled from "styled-components";
import ProductListItem from "../ProductListItem/ProductListItem";
import { ItemData } from "../tmpConst";

const Wrap = styled.div`
  flex: 1;
  min-height: 100px;
  min-width: 100px;
`;
interface ProductListListProps{
  items :ItemData[]
}
const ProductListList = ({items}:ProductListListProps) => {
  return <Wrap>

    {items.map((item,index)=>{
      return <ProductListItem item={item} key={index}/>
    })}
  </Wrap>;
};

export default ProductListList;
