import React from "react";
import styled from "styled-components";
import { Ad } from "../../../../constans/types";
import { nameToPublicLink } from "../../../../utils/imageFunctions";
import SignIn from "../../../core/Sigin/SignIn";
import CardWrap from "./CardWrap.";

interface CardProps {
  data: Ad;
}

const Image = styled.img`
  max-width: 375px;
  min-width: 250px;
  max-height: 250px;
  margin: 1rem auto 0 auto;
  
`;
const CardAd = ({ data }: CardProps) => {
  const { signIn, addName } = data;
  return (
    <CardWrap type="add">
      {signIn ? <SignIn /> : null}
      <Image src={nameToPublicLink(addName, "ads")} alt={addName} />
    </CardWrap>
  );
};

export default CardAd;
