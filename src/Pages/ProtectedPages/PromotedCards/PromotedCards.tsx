import React, { useContext } from "react";
import styled from "styled-components";
import { DashboardContext } from "../../../context/DashboardContext";
import { DataContext } from "../../../context/DataContext";
import MyText from "../../../components/core/Text/MyText";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import FormikForm, {
  InputData,
} from "../../../components/core/Form/FormikForm";
import { formikDashboardData } from "../FormikData";
import { Test } from "./Test";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  > * {
    padding: 1rem;
  }
`;
const HomeImages = () => {
  // we use different one beacuse wee nned to acces context in upload
  const { inputs, submitButtonText } = formikDashboardData.promotedCards;
  const { objectsToDisplay, addNewCard } = useContext(DataContext);

  return (
    <PageCenterWrapWithBread>
      <Wrap>
        <MyText fontSize="2rem" boldness="bold">
          Add new home image
        </MyText>
        <FormikForm
          onSubmit={addNewCard}
          inputs={inputs}
          submitButtonText={submitButtonText}
        />
        <MyText fontSize="2rem" boldness="bold">
          Change home image order, or toggle visibility
        </MyText>
        <Test data={objectsToDisplay.cardGroups} />
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default HomeImages;
