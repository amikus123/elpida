import React from "react";
import styled from "styled-components";
import { CardData } from "../../../../constans/types";
import MyText from "../../../core/Text/MyText";
import CardWrap from "./CardWrap.";

const CardWrapWithSize = styled(CardWrap)`
  height: 420px;
  min-width: 275px;
  max-width: 350px;
`;
const TextWrap = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
`;

const TopWrap = styled.div`
  max-height: 420px;
`;
const Imgage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
`;

interface CardProps {
  data: CardData;
}
const HomeCard = ({ data }: CardProps) => {
  const { image: imageName, title: topText, bottomText, link } = data;
  return (
    <CardWrapWithSize type="home">
      <TopWrap>
        <MyText variant="header" fontSize="21px">
          {topText}
        </MyText>
        <TextWrap></TextWrap>
        <MyText to={link} element="link">
          <Imgage alt={imageName} src={imageName} />
        </MyText>
      </TopWrap>
      <MyText
        element="link"
        to={link}
        style={{ paddingBottom: "10px" }}
        fontSize="13px"
      >
        {bottomText}
      </MyText>
    </CardWrapWithSize>
  );
};

export default HomeCard;
