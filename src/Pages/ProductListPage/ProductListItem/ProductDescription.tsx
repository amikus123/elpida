import React from "react";
import styled from "styled-components";
import { nameToPublicLink } from "../../../utils/imageFunctions";
import { Option } from "../tmpConst";
import Text from "../../../components/core/Text/Text";
interface ProductDescriptionProps {
  properties: Option[];
  images: string[];
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  padding:1rem;
`;
const PropertyWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const PropertyListWrap = styled.div`
  margin-left: 1rem;
`;
const Image = styled.img``;

const ProductDescription = ({
  properties,
  images,
}: ProductDescriptionProps) => {
  return (
    <Wrap>
      <Image
        src={nameToPublicLink(images[0], "items")}
        alt="first product image"
      />
      <PropertyListWrap>
        {properties.map((item, index) => {
          return (
            <PropertyWrap key={index}>
              <Text presetColor="grey"> {item.title}: </Text>
              <Text>&nbsp;{item.value}</Text>
            </PropertyWrap>
          );
        })}
      </PropertyListWrap>
    </Wrap>
  );
};

export default ProductDescription;
