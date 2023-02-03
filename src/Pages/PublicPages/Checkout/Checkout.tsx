import React, { useContext } from "react";
import styled from "styled-components";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import PlainButton from "../../../components/core/Buttons/PlainButton";
import MyText from "../../../components/core/Text/MyText";
import { PUBLIC_ROUTES } from "../../../constans/routes";
import { DataContext } from "../../../context/DataContext";
import { ElementContext } from "../../../context/ElementContext";
import { fun } from "../../../firebase/main";
import { countCartItems, countCartTotal } from "../../../utils/cartFuctiions";
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
  @media (max-width: 640px) {
    margin: 2.5rem;
  }
`;
const EmptyWrap = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
  text-align: center;
`;
const Checkout = () => {
  // list of items with buttons to add change etc
  // at the end add button to pay with stripe
  const { cartState } = useContext(DataContext);
  const { setSnackbarWithResposne } = useContext(ElementContext);

  return (
    <PageCenterWrapWithBread>
      <Wrap>
        {countCartItems(cartState) > 0 ? (
          <>
            <ListWrap>
              {Object.keys(cartState).map((item, index) => {
                return <CheckoutCartItem key={index} item={cartState[item]} />;
              })}
            </ListWrap>
            <ButtonWrap>
              <PlainButton
                text={`Pay ${countCartTotal(cartState)} zl`}
                style={{ fontSize: "1.5rem" }}
                onClick={async () => {
                  setSnackbarWithResposne({
                    error: false,
                    text: "Waiting for Stripe...",
                  });
                  await fun(cartState);
                }}
              />
            </ButtonWrap>{" "}
          </>
        ) : (
          <EmptyWrap>
            <MyText> It apperas that your cart is empty</MyText>
            <MyText to={PUBLIC_ROUTES.CATEGORIES} presetColor="red">
              Browse items
            </MyText>
          </EmptyWrap>
        )}
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default Checkout;
