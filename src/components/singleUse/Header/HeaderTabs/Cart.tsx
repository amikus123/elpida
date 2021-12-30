import React, { useContext } from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../../../constans/routes";
import { DataContext } from "../../../../context/DataContext";
import { SIZES } from "../../../../styles/styleValues";
import { countCartItems } from "../../../../utils/cartFuctiions";

const Wrap = styled(Link)`
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
  & > :last-child {
    padding-left: 0.125rem;
    padding-bottom: 0.5rem;
  }
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
  font-weight:bold;
  color: #fff;
`;
const Text = styled.span`
  font-weight: bold;
  color: #fff;
  @media (max-width: ${SIZES.TABLET}) {
    display:none;
  }
`;
const Cart = () => {
  const { cartState} = useContext(DataContext);
  return (
    <Wrap to={PUBLIC_ROUTES.CHECKOUT}>
      <CartWrap>
        <FaShoppingCart color="red" size="2.5rem" />
        <CartNumber>{countCartItems(cartState)}</CartNumber>
      </CartWrap>
      <Text>Cart</Text>
    </Wrap>
  );
};

export default Cart;
