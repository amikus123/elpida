import React from 'react'
import { Link } from 'react-router-dom';

import styled from "styled-components";
import CardWrap from '../Cards/CardTypes/CardWrap.';
import MyText from '../../../components/core/Text/MyText';
import { Category } from '../../../constans/categories';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
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
  padding: 1rem;
  height: 200px;
  width: 200px;
  color: inherit;
`;
const ImageComponent = styled.img`
  max-width: 125px;
  max-height: 125px;
`;

interface CategoryItemProps{
 item:Category
}
const CardWrapStyled = styled(CardWrap)``;
const CategoryItem = ({item}:CategoryItemProps) => {
  const {link,image,title,count} = item

  return (
    <CardWrapStyled>
    <LinkFill to={link}>
      <ImageComponent src={image} />
      <MyText>{title}</MyText>
      {count?<MyText presetColor="grey">({count})</MyText>:null}
    </LinkFill>
  </CardWrapStyled>
  )
}

export default CategoryItem
