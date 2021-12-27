import React from "react";
import styled from "styled-components";
import MyText from "../../../../components/core/Text/MyText";
import {
  camelToSplit,
  determineExtraSymbol,
  capitalizeFirstLetter,
} from "../../../../utils/stringFunctions";
interface ProductDescriptionProps {
  properties: Record<string, string>;
  image: string;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 0 0 1rem;
  
  }

`;
const PropertyWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const PropertyListWrap = styled.div`
  margin-left: 1rem;
  @media (max-width: 640px) {
    margin-left: 0;
  }
`;
const ImageWrap = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    width: initial;
    height: initial;
  }
`;
const Image = styled.img`
  max-width: 200px;
  max-height: 300px;
`;

const ProductDescription = ({ properties, image }: ProductDescriptionProps) => {
  return (
    <Wrap>
      <ImageWrap>
        <Image src={image} alt="product" />
      </ImageWrap>
      <PropertyListWrap>
        {Object.keys(properties).map((key, index) => {
          return (
            <PropertyWrap key={index}>
              <MyText presetColor="grey" element="span">
                {camelToSplit(key)}:
                <MyText element="span" presetColor="black">
                  &nbsp;{capitalizeFirstLetter(properties[key])}
                  {determineExtraSymbol(key)}
                </MyText>
              </MyText>
            </PropertyWrap>
          );
        })}
      </PropertyListWrap>
    </Wrap>
  );
};

export default ProductDescription;
