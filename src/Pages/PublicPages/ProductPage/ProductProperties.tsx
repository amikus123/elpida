import { useState, useEffect } from "react";
import styled from "styled-components";
import NumericalInput from "../../../components/core/Inputs/NumericalInput";
import MyText from "../../../components/core/Text/MyText";
import { ItemProperties } from "../../../context/DataContext";
import { splitProperties } from "../../../utils/filterOptions";
import {
  camelToSplit,
  determineExtraSymbol,
} from "../../../utils/stringFunctions";
import Rating from "../ProductListPage/ProductListItem/Rating";

interface ProductPropertiesProps {
  item: ItemProperties;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  flex: 1;
`;
const PropertyWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const PropertyListWrap = styled.div`
  margin-left: 1rem;
  font-size:1.25rem;
`;


interface Values {
  addonitial: Record<string, string>;
  core: Record<string, string>;
}

const ProductProperties = ({ item }: ProductPropertiesProps) => {
  const [values, setValues] = useState<Values>({ addonitial: {}, core: {} });
  const [count,setCount] = useState(1)
  useEffect(() => {
    const itemValues = splitProperties(item);
    setValues(itemValues);
  }, []);


  return (
    <Wrap>
      <PropertyListWrap> 
        <MyText fontSize="2em" element="h2" >{camelToSplit(values.core.title)}</MyText>
        <div>
          <Rating rating={1} ratingCount={1} productCode={values.core.id} />
        </div>
        <MyText fontSize="2em" element="h2" >{values.core.price} zl</MyText>

        {Object.keys(values.addonitial).map((key, index) => {
          return (
            <PropertyWrap key={index}>
              <MyText presetColor="grey"> {camelToSplit(key)}: </MyText>
              <MyText>
                &nbsp;{camelToSplit(values.addonitial[key])}
                {determineExtraSymbol(key)}
              </MyText>
            </PropertyWrap>
          );
        })}
        <NumericalInput count={count} setCount={setCount}/>
      </PropertyListWrap>
    </Wrap>
  );
};

export default ProductProperties;
