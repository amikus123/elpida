import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import {  groupDataTemplates } from "../FormikData";
import GroupDataPage from "../../../components/complex/GroupDragPage/GroupDataPage";

const BestSellers = () => {
  // we use different one beacuse wee nned to acces context in upload
  const { contentData } = useContext(DataContext);

  return (
 
    <GroupDataPage objectsToDisplay={contentData.cardGroups as unknown as Record<string,string>[][]}  templateData={groupDataTemplates.promotedCards} />
  );
};

export default BestSellers;
