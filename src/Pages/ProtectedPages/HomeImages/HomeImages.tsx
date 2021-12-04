import React, { useContext } from "react";
import ImageAdder from "./ImageAdder/ImageAdder";
import DragItemSetter from "../../../components/complex/DragItemSetter/DragItemSetter";
import styled from "styled-components";
import { DashboardContext } from "../../../context/DashboardContext";
import { DataContext } from "../../../context/DataContext";
import MyText from "../../../components/core/Text/MyText";
import MyBreadcrumbs from "../../../components/core/Breadcrumbs/MyBreadcrumbs";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  > *{
    padding:1rem;
  }
`;
const HomeImages = () => {
  const { homeImages } = useContext(DashboardContext);
  const { dataToShow, updateSelectedImagesList } = useContext(DataContext);

  return (
    <Wrap>
      <MyBreadcrumbs/>
      <MyText fontSize="3rem" boldness="bold">Edit </MyText>
      <ImageAdder />
      <DragItemSetter
        imageData={homeImages}
        orderOfVisibleItems={dataToShow.selectedHomeImages}
        updateOrdder={updateSelectedImagesList}
      />
    </Wrap>
  );
};

export default HomeImages;
