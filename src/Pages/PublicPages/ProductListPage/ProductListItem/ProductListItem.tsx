import React, { useEffect, useState } from "react";
import MyText from "../../../../components/core/Text/MyText";
import Rating from "./Rating";
import ProductDescription from "./ProductDescription";
import ProductSidebar from "./ProductSidebar";
import styled from "styled-components";
import { COLORS } from "../../../../styles/styleValues";
import { camelToSplit } from "../../../../utils/stringFunctions";
import { Link } from "react-router-dom";
import { ItemProperties } from "../../../../context/DataContext";
import { splitProperties } from "../../../../utils/filterOptions";
import { createLink } from "../../../../utils/generalFunctions";

interface ProductListItemProps {
  item: ItemProperties;
  categoryName: string;
}
const Wrap = styled.section`
  border: 1px solid ${COLORS.grey};
  display: flex;
  flex-direction: row;
  font-size: 1.125rem;
`;
const DescrtiptionWrap = styled(Link)`
  padding: 1rem;

  flex: 1;
`;

interface Values {
  addonitial: Record<string, string>;
  core: Record<string, string>;
}
const ProductListItem = ({ item, categoryName }: ProductListItemProps) => {
  const [values, setValues] = useState<Values>({ addonitial: {}, core: {} });
  useEffect(() => {
    const itemValues = splitProperties(item);
    setValues(itemValues);
  }, [item]);

  return (
    <>
      {values.core["id"] !== undefined ? (
        <Wrap>
          <DescrtiptionWrap to={createLink(item, categoryName)}>
            <MyText fontSize="2em">{camelToSplit(values.core.title)}</MyText>
            <div>
              <Rating rating={1} ratingCount={1} productCode={values.core.id} />
            </div>
            <ProductDescription
              image={values.core.image}
              properties={values.addonitial}
            />
          </DescrtiptionWrap>
          <ProductSidebar
            price={Number(values.core.price)}
            item={item}
            link={createLink(item, categoryName)}
          />
        </Wrap>
      ) : null}
    </>
  );
};

export default ProductListItem;
