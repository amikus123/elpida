import React from "react";
import styled from "styled-components";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import MyText from "../../../components/core/Text/MyText";
import { PUBLIC_ROUTES } from "../../../constans/routes";

const ErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
`;

const IncorrectPath = () => {
  return (
    <PageCenterWrapWithBread>
      <ErrorWrap>
        <MyText>Page does not exit</MyText>
        <MyText style={{ color: "orange" }} to="/">
          Go Home
        </MyText>
      </ErrorWrap>
    </PageCenterWrapWithBread>
  );
};

export default IncorrectPath;
