import React, { useContext, } from "react";
import styled from "styled-components";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import PlainButton from "../../../components/core/Buttons/PlainButton";
import { DataContext } from "../../../context/DataContext";
import { countCartTotal } from "../../../utils/cartFuctiions";
import CheckoutCartItem from "./CheckoutCartItem";
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListWrap = styled.div`
  width: 100%;
`;
const ButtonWrap = styled.div`
  width: 200px;
`;
const Checkout = () => {
  // list of items with buttons to add change etc
  // at the end add button to pay with stripe
  // add something if cart is empty
  const { cartState } = useContext(DataContext);
  return (
    <PageCenterWrapWithBread>
      <Wrap>
        <ListWrap>
          {Object.keys(cartState).map((item, index) => {
            return <CheckoutCartItem key={index} item={cartState[item]} />;
          })}
        </ListWrap>
        <ButtonWrap>
          <PlainButton text={`Pay ${countCartTotal(cartState)} zl`}  style={{"fontSize":"1.5rem"}}/>
        </ButtonWrap>
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default Checkout;
