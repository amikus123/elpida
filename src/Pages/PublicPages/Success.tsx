import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { PageCenterWrapWithBread } from "../../components/containers/PageCenterWrap";
import MyText from "../../components/core/Text/MyText";
import { PUBLIC_ROUTES } from "../../constans/routes";
import { DataContext } from "../../context/DataContext";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Success = () => {
  const { resetCart } = useContext(DataContext);

  useEffect(() => {
    resetCart();
  }, []);
  return (
    <PageCenterWrapWithBread>
      <Wrap>
        <EmptyWrap>
          <MyText> Thank you for using our shop!</MyText>
          <MyText to={PUBLIC_ROUTES.CHECKOUT} presetColor="green">
            Do you want to continue browsing?
          </MyText>
        </EmptyWrap>
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default Success;
