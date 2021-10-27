import React from "react";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
const number = 1;

const Wrap = styled.div`
  font-size: 0.875rem;
  color: #fff;
  /* margin: 5px 0; */
  white-space: pre-wrap;
  padding: 5px 11px;
  display: flex;
  align-items: flex-end;
  &:hover {
    outline: 1px solid #fff;
  }
  cursor: pointer;
  max-height: 54px;
`;
const CartWrap = styled.div`
  position: relative;
`;
const CartNumber = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding-bottom: 0.75rem;
  color: #fff;
`;
const Text = styled.span`
  font-weight: bold;
  color: #fff;
  padding-left: 0.125rem;
  padding-bottom: 0.5rem;
`;
const Cart = () => {
  return (
    <Wrap>
      <CartWrap>
        <FaShoppingCart color="red" size="2.5rem" />
        <CartNumber>{number}</CartNumber>
      </CartWrap>
      <Text>Cart</Text>
    </Wrap>
  );
};

export default Cart;
