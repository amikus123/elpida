import React from "react";
import styled from "styled-components";
import MyText from "../../../../components/core/Text/MyText";
import { camelToSplit, determineExtraSymbol } from "../../../../utils/stringFunctions";
interface ProductDescriptionProps {
  properties: Record<string,string>;
  image: string
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;
const PropertyWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const PropertyListWrap = styled.div`
  margin-left: 1rem;
`;
const Image = styled.img`
  max-width:200px;
`;



const ProductDescription = ({
  properties,
  image,
}: ProductDescriptionProps) => {
  return (
    <Wrap>
      <Image
        src={image}
        alt="product"
      />
      <PropertyListWrap>
        {Object.keys(properties).map((key, index) => {
          return (
            <PropertyWrap key={index}>
              <MyText presetColor="grey"> {camelToSplit(key)}: </MyText>
              <MyText>&nbsp;{camelToSplit(properties[key])}{determineExtraSymbol(key)}</MyText>
            </PropertyWrap>
          );
        })}
      </PropertyListWrap>
    </Wrap>
  );
};

export default ProductDescription;
