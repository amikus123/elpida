import React from 'react'
import { Link } from 'react-router-dom';

import styled from "styled-components";
import CardWrap from '../Cards/CardTypes/CardWrap.';
import MyText from '../../../components/core/Text/MyText';
import { CardData } from '../../../constans/types';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  & > :hover {
    transform: scale(1.05);
  }
`;
const LinkFill = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #888;
  height: 220px;
  width: 220px;
  color: inherit;
 
`;
const ImageComponent = styled.img`
  max-width: 125px;
  max-height: 125px;
`;

interface CategoryItemProps{
 item:CardData
}


const CardWrapStyled = styled(CardWrap)``;
const CategoryItem = ({item}:CategoryItemProps) => {
  const {link,title: topText,bottomText,image: imageName} = item

  return (
    <CardWrapStyled>
    <LinkFill to={link}>
      {link}
      <ImageComponent src={imageName} />
      <MyText fontSize="1.25rem">{topText}</MyText>
      {bottomText?<MyText presetColor="grey" fontSize="1.125rem">{bottomText}</MyText>:null}
    </LinkFill>
  </CardWrapStyled>
  )
}

export default CategoryItem
