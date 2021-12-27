import React from "react";
import styled from "styled-components";
import MyText from "../../../../components/core/Text/MyText";
import { camelToSplit, determineExtraSymbol,capitalizeFirstLetter } from "../../../../utils/stringFunctions";
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
const ImageWrap = styled.div`
  width:200px;
  height:300px;
  display:flex;
  align-items:center;
  justify-content:center;
`
const Image = styled.img`
  max-width:200px;
  max-height:300px;
`;



const ProductDescription = ({
  properties,
  image,
}: ProductDescriptionProps) => {
  return (
    <Wrap>
      <ImageWrap>
      <Image
        src={image}
        alt="product"
        />
        </ImageWrap>
      <PropertyListWrap>
        {Object.keys(properties).map((key, index) => {
          return (
            <PropertyWrap key={index}>
              <MyText presetColor="grey"> {camelToSplit(key)}: </MyText>
              <MyText>&nbsp;{capitalizeFirstLetter(properties[key])}{determineExtraSymbol(key)}</MyText>
            </PropertyWrap>
          );
        })}
      </PropertyListWrap>
    </Wrap>
  );
};

export default ProductDescription;
