import React, { useEffect, useState } from "react";
import MyText from "../../../../components/core/Text/MyText";
import Rating from "./Rating";
import ProductDescription from "./ProductDescription";
import ProductSidebar from "./ProductSidebar";
import styled from "styled-components";
import { COLORS } from "../../../../styles/styleValues";
import { camelToSplit } from "../../../../utils/stringFunctions";

interface ProductListItemProps {
  item: any;
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

const coreKeys = {
  id: true,
  image: true,
  price:true,
  title:true
};
interface Values {
  addonitial: Record<string, any>;
  core: Record<string, any>;
}
const ProductListItem = ({ item }: ProductListItemProps) => {
  const [values, setValues] = useState<Values>({ addonitial: {}, core: {} });

  useEffect(() => {
    const getProperties = () => {
      const addonitial = {};
      const core = {};
      const keys = Object.keys(item);
      keys.forEach((key) => {
        if (coreKeys[key] !== undefined) {
          core[key] = item[key];
        } else {

          addonitial[key] = item[key];
        }
      });
      console.log(addonitial,core)
      setValues({ addonitial, core });
    };
    getProperties();
  }, [item]);
  return (
    <Wrap>
      {values.core["id"] !== undefined ? (
        <>
          <DescrtiptionWrap>
            <MyText fontSize="2em" to={values.core.id}>
              {camelToSplit(values.core.title)}
            </MyText>
            <div>
              <Rating
                rating={1}
                ratingCount={1}
                productCode={values.core.id}
              />
            </div>
            <ProductDescription image={values.core.image} properties={values.addonitial} />
          </DescrtiptionWrap>
          <ProductSidebar price={values.core.price} />
        </>
      ) : null}
    </Wrap>
  );
};

export default ProductListItem;
