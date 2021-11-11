import React from "react";
import { Link } from "react-router-dom";
import CardWrap from "../../components/core/Cards/CardWrap.";
import { categories } from "../../constans/categories";
import Text from "../../components/core/Text/Text";
import styled from "styled-components";

const Wrap = styled.div`

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction:row ;
  justify-content: center;
  &>:hover{
    transform: scale(1.05);
  }
  
`;
const LinkFill = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #888;
  padding:1rem;
  height: 200px;
  width: 200px;
  color:inherit;


`;
const ImageComponent = styled.img`
  max-width: 125px;
  max-height: 125px;
`;
const CardWrapStyled = styled(CardWrap)`

`;

const Categories = () => {
  return (
    <Wrap>
      {categories.map((item, index) => {
        return (
          <CardWrapStyled key={index}>
            <LinkFill to={item.link}>
              <ImageComponent src={item.image} />
              <Text>{item.title}</Text>
              <Text  presetColor="grey" >({item.count})</Text>
            </LinkFill>
          </CardWrapStyled>
        );
      })}

    </Wrap>
  );
};

export default Categories;
