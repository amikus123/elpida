import React from "react";
import styled from "styled-components";
import { ItemProperties } from "../../../../context/DataContext";
import ProductListItem from "../ProductListItem/ProductListItem";

const Wrap = styled.div`
  flex: 1;
  min-height: 100px;
  min-width: 100px;
`;
interface ProductListListProps{
  items :ItemProperties[];
  categoryName:string;

}
const ProductListList = ({items,categoryName}:ProductListListProps) => {
  return <Wrap>
    {
      items!==undefined?  items.map((item,index)=>{
        return <ProductListItem item={item} key={index}    categoryName={categoryName}/>
      }):null
    }
  
  </Wrap>;
};

export default ProductListList;
