import React, { useContext } from "react";
import DragItemSetter from "../../../components/complex/DragItemSetter/DragItemSetter";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";
import MyText from "../../../components/core/Text/MyText";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import FormikForm from "../../../components/core/Form/FormikForm";
import { formikDashboardData } from "../FormikData";
import { FirestorePaths } from "../../../constans/consts";

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
  const { activeIds, updateSelectedImagesList,deleteByIdGenerator,contentData } = useContext(DataContext);
  const {inputs,handleSubmit,submitButtonText} = formikDashboardData.homeImages


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
        <DragItemSetter
          deleteById={deleteByIdGenerator(FirestorePaths.homeImages)}
          imageData={contentData.dashboardImages}
          orderOfVisibleItems={activeIds.selectedHomeImages}
          updateOrdder={updateSelectedImagesList}
        />
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default HomeImages;
