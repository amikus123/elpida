import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardData } from "../../../constans/homeCards";
import { nameToPublicLink } from "../../../utils/imageFunctions";
import Text from "../Text/Text";
import CardWrap from "./CardWrap.";

const CustomLink = styled(Link)`
  display:block;
&>img{
width:100%;
aspect-ratio: 1 / 1;
}`;

const TextWrap = styled.div`
  padding-bottom:10px;
  padding-top: 10px;
`;


const BottomText = styled(Link)`
color:#007185;
&:hover{
  color:#C7511F
}

padding-bottom:10px;
`;
interface CardProps {
  data: CardData;
}
const HomeCard = ({ data }: CardProps) => {
  const { imageName, topText, bottomText, link } = data;
  return (
    <CardWrap type="home" >
    <div>
      <TextWrap>

      <Text variant="header" fontSize="21px" >{topText}</Text>
      </TextWrap>
      <CustomLink to={link}>
        <img alt={imageName} src={nameToPublicLink(imageName, "homeCards")} />
      </CustomLink>
      </div>
      <BottomText to={link}>{bottomText}</BottomText>
    </CardWrap>
  );
};

export default HomeCard;
