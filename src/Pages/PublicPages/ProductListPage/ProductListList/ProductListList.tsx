import React from "react";
import styled from "styled-components";
import ProductListItem from "../ProductListItem/ProductListItem";

const Wrap = styled.div`
  flex: 1;
  min-height: 100px;
  min-width: 100px;
`;
interface ProductListListProps{
  items :any[]
}
const ProductListList = ({items}:ProductListListProps) => {
  return <Wrap>
    {
      items!==undefined?  items.map((item,index)=>{
        return <ProductListItem item={item} key={index}/>
      }):null
    }
  
  </Wrap>;
};

export default ProductListList;
