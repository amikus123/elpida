import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { groupDataTemplates } from "../FormikData";
import GroupDataPage from "../../../components/complex/GroupDragPage/GroupDataPage";

const HomeImages = () => {
  // we use different one beacuse we need to access context in upload
  const { contentData } = useContext(DataContext);

  return (
    <GroupDataPage
      objectsToDisplay={
        contentData.cardGroups as unknown as Record<string, string>[][]
      }
      templateData={groupDataTemplates.promotedCards}
    />
  );
};

export default HomeImages;
