import React, { useContext } from "react";
import styled from "styled-components";
import { DashboardContext } from "../../../context/DashboardContext";
import { DataContext } from "../../../context/DataContext";
import MyText from "../../../components/core/Text/MyText";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import FormikForm, { InputData } from "../../../components/core/Form/FormikForm";
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
  const { homeImages } = useContext(DashboardContext);
  const { dataToShow, updateSelectedImagesList } = useContext(DataContext);
  const {inputs,handleSubmit,submitButtonText} = formikDashboardData.promotedCards
  // 
  return (
    <PageCenterWrapWithBread>
      <Wrap>
        <MyText fontSize="2rem" boldness="bold">
          Add new home image
        </MyText>
      <FormikForm
          onSubmit={handleSubmit}
          inputs={inputs}
          submitButtonText={submitButtonText}

      />
        <MyText fontSize="2rem" boldness="bold">
          Change home image order, or toggle visibility
        </MyText>
        <Test/>

      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default HomeImages;
