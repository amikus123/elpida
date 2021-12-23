import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NumericalInput from "../../../components/core/Inputs/NumericalInput";
import MyText from "../../../components/core/Text/MyText";
import { CartItem, DataContext } from "../../../context/DataContext";
import { IoTrashBin } from "react-icons/io5";

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  wdith: 100%;
`;

const LeftContainer = styled(Link)`
  display: flex;
  flex-direction: row;
`;
const ImageWrap = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:1rem;
`;
const Image = styled.img`
  max-width: 150px;
  max-height: 150px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Icon = styled(IoTrashBin)`
  cursor: pointer;
  margin: 1rem;
  font-size: 1.75rem;
`;

interface CheckoutCartItemProps {
  item: CartItem;
}
const CheckoutCartItem = ({ item }: CheckoutCartItemProps) => {
  const { cartState, modifyCart } = useContext(DataContext);
  return (
    <Wrap>
      <LeftContainer to={item.link}>
        <ImageWrap>
          <Image src={item.image} />
        </ImageWrap>
        <TextWrap>
          <MyText
            element="h2"
            fontSize="2rem"
          >
            {item.title}
          </MyText>
          <MyText
            element="span"
            fontSize="1.5rem"
          >
            Total:{item.count * item.price}zl
          </MyText>
        </TextWrap>
      </LeftContainer>
      <RightContainer>
        <NumericalInput
        abosluteError={true}
          count={item.count}
          setCount={(n) => {
            modifyCart(item, n);
          }}
        />
        <Icon
          onClick={(e) => {
            modifyCart(item, 0);
          }}
        />
      </RightContainer>
    </Wrap>
  );
};

export default CheckoutCartItem;
