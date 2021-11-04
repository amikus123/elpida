import React from "react";
import { RowContent } from "../../../constans/rowData";
import ItemRowCarousel from "./ItemRowCarousel";
import Text from "../../../components/core/Text/Text"

interface ItemRowProps{
  data:RowContent;
}
const ItemRow = ({data}:ItemRowProps) => {

  const { products, extraPath, header, showLink } = data;
  return (
    <div>
      <div>
        <Text>{header}</Text>
        {showLink ? <Text>Shop now</Text> : null}
      </div>
      <div>
        <ItemRowCarousel products={products} extraPath={extraPath} />
      </div>
    </div>
  );
};

export default ItemRow;
