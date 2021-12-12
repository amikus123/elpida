import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";
import MyText from "../../../components/core/Text/MyText";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import FormikForm from "../../../components/core/Form/FormikForm";
import { formikDashboardData } from "../FormikData";
import GroupDrag from "../../../components/complex/GroupDrag/GroupDrag";

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
          Add new card
        </MyText>
        <FormikForm
          onSubmit={addNewCard}
          inputs={inputs}
          submitButtonText={submitButtonText}
        />
        <MyText fontSize="2rem" boldness="bold">
          Change card groups
        </MyText>
        <GroupDrag data={objectsToDisplay.cardGroups} />
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default HomeImages;
