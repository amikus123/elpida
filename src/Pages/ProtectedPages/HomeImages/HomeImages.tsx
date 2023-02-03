import React, { useContext, useEffect } from "react";
import DragItemSetter from "../../../components/complex/DragItemSetter/DragItemSetter";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";
import MyText from "../../../components/core/Text/MyText";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import FormikForm from "../../../components/core/Form/FormikForm";
import { formikDashboardData } from "../FormikData";
import { FirestorePaths } from "../../../constans/consts";
import { SnackbarTexts } from "../../../constans/snackbar";
import { ElementContext } from "../../../context/ElementContext";

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
  const { activeIds, updateSelectedImagesList, contentData, updateHomeImages } =
    useContext(DataContext);
  const { inputs, handleSubmit, submitButtonText } =
    formikDashboardData.homeImages;
  useEffect(() => {}, [contentData.dashboardImages]);
  const { updateSnackbar } = useContext(ElementContext);

  return (
    <PageCenterWrapWithBread>
      <Wrap>
        <MyText fontSize="2rem" boldness="bold" style={{ textAlign: "center" }}>
          Add new home image
        </MyText>
        <FormikForm
          onSubmit={(arg: any) => {
            return handleSubmit(arg)
              .then(() => {
                return { text: SnackbarTexts.succesfulDbChange, error: false };
              })
              .catch(() => {
                return { text: SnackbarTexts.unsuccesfulDbChange, error: true };
              });
          }}
          inputs={inputs}
          submitButtonText={submitButtonText}
        />
        <MyText fontSize="2rem" boldness="bold" style={{ textAlign: "center" }}>
          Change home image order, or toggle visibility
        </MyText>
        <DragItemSetter
          deleteById={(arg: any) => {
            return updateHomeImages(arg)
              .then(() => {
                updateSnackbar(SnackbarTexts.succesfulDbChange, "green");
              })
              .catch(() => {
                updateSnackbar(SnackbarTexts.unsuccesfulDbChange, "red");
              });
          }}
          imageData={contentData.dashboardImages}
          orderOfVisibleItems={activeIds.selectedHomeImages}
          updateOrdder={updateSelectedImagesList}
        />
      </Wrap>
    </PageCenterWrapWithBread>
  );
};

export default HomeImages;
