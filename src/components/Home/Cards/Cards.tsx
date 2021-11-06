import React,{useEffect} from "react";
import styled from "styled-components";
import { CardArr } from "../../../constans/homeCards";
import CardAd from "../../core/Cards/CardAd";
import HomeCard from "../../core/Cards/HomeCard";

interface CardWrapProps {
  data: CardArr;
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
  justify-content: center;
`;

const Cards = ({ data }: CardWrapProps) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Wrapper>
      {data.map((item, index) => {
        if ("signIn" in item) {
          return <CardAd data={item} key={index} />;
        } else {
          return <HomeCard data={item} key={index} />;
        }
      })}
    </Wrapper>
  );
};

export default Cards;
