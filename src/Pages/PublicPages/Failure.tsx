import React from "react";
import styled from "styled-components";
import { PageCenterWrapWithBread } from "../../components/containers/PageCenterWrap";
import MyText from "../../components/core/Text/MyText";
import { PUBLIC_ROUTES } from "../../constans/routes";

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
const Failure = () => {
  return (
    <PageCenterWrapWithBread>
      <Wrap>
        <EmptyWrap>
          <MyText  presetColor="red"> It apperas that the transaction failed</MyText>
          <MyText to={PUBLIC_ROUTES.CHECKOUT} presetColor="green">
            Go to checkout
          </MyText>
        </EmptyWrap>
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default Failure;
