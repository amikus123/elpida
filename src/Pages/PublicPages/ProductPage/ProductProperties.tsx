import { useState, useEffect } from "react";
import styled from "styled-components";
import AddToCart from "../../../components/core/Buttons/SmartButtons/AddToCart";
import NumericalInput from "../../../components/core/Inputs/NumericalInput";
import MyText from "../../../components/core/Text/MyText";
import { ItemProperties } from "../../../context/DataContext";
import { splitProperties } from "../../../utils/filterOptions";
import { createLink } from "../../../utils/generalFunctions";
import {
  camelToSplit,
  capitalizeFirstLetter,
  determineExtraSymbol,
} from "../../../utils/stringFunctions";
import Rating from "../ProductListPage/ProductListItem/Rating";

interface ProductPropertiesProps {
  item: ItemProperties;
  category: string;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1;
  margin-left: 1rem;
  font-size: 1.25rem;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
const PropertyWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.25rem;
`;
const InteractionWrap = styled.div`
  > * {
    margin-top: 1rem;
  }
`;
const PropertyListWrap = styled.div``;

interface Values {
  addonitial: Record<string, string>;
  core: Record<string, string>;
}

const ProductProperties = ({ item, category }: ProductPropertiesProps) => {
  const [values, setValues] = useState<Values>({ addonitial: {}, core: {} });
  const [count, setCount] = useState(1);
  useEffect(() => {
    const itemValues = splitProperties(item);
    setValues(itemValues);
  }, [item]);

  return (
    <Wrap>
      <MyText fontSize="2em" element="h2">
        {camelToSplit(values.core.title)}
      </MyText>
      <div>
        <Rating rating={1} ratingCount={1} productCode={values.core.id} />
      </div>
      <MyText fontSize="2em" element="h2">
        {values.core.price} zl
      </MyText>
      <PropertyListWrap>
        {Object.keys(values.addonitial).map((key, index) => {
          return (
            <PropertyWrap key={index}>
              <MyText presetColor="grey" element="span">
                {camelToSplit(key)}:
                <MyText presetColor="black" element="span">
                  &nbsp;{capitalizeFirstLetter(values.addonitial[key])}
                  {determineExtraSymbol(key)}
                </MyText>
              </MyText>
            </PropertyWrap>
          );
        })}
      </PropertyListWrap>
      <InteractionWrap>
        <NumericalInput count={count} setCount={setCount} />
        <AddToCart
          item={item}
          link={createLink(item, category)}
          count={count}
          text="Add to cart"
          showCount={true}
        />
        <AddToCart
          item={item}
          link={createLink(item, category)}
          count={count}
          checkout={true}
          text="Buy now"
        />
      </InteractionWrap>
    </Wrap>
  );
};

export default ProductProperties;
