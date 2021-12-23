import React from "react";
import { ItemProperties } from "../../../context/DataContext";
import ItemCard from "./ItemCard";
import styled from "styled-components";
import Spinner from "../../../components/core/Loading/Spinner";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

interface ItemListProps {
  items: ItemProperties[];
  categoryName: string;
  handleDelete: (s: string) => any;
}
const ItemList = ({ items, handleDelete }: ItemListProps) => {
  return (
    <>
      {items.length === 0 ? (
        <Spinner showText={true} />
      ) : (
        <Wrap>
          {items.map((item, index) => {
            return (
              <ItemCard handleDelete={handleDelete} item={item} key={index} />
            );
          })}
        </Wrap>
      )}
    </>
  );
};

export default ItemList;
