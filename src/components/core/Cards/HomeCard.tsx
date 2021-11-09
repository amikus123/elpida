import React from "react";
import styled from "styled-components";
import { CardData } from "../../../constans/homeCards";
import { nameToPublicLink } from "../../../utils/imageFunctions";
import Text from "../Text/Text";
import CardWrap from "./CardWrap.";

const CardWrapWithSize = styled(CardWrap)`
height: 420px;
min-width: 275px;
max-width: 350px;`
const TextWrap = styled.div`
  padding-bottom:10px;
  padding-top: 10px;
`;

const Imgage = styled.img`
width:100%;
aspect-ratio: 1 / 1;
`

interface CardProps {
  data: CardData;
}
const HomeCard = ({ data }: CardProps) => {
  const { imageName, topText, bottomText, link } = data;
  return (
    <CardWrapWithSize type="home" >
    <div>
      <Text variant="header" fontSize="21px" >{topText}</Text>
      <TextWrap>
      </TextWrap>
      <Text to={link} element="link" >
        <Imgage alt={imageName} src={nameToPublicLink(imageName, "homeCards")} />
      </Text>
      </div>
      <Text element="link"to={link} style={{paddingBottom:"10px"}} fontSize="13px" >{bottomText}</Text>
    </CardWrapWithSize> 
  );
};

export default HomeCard;
