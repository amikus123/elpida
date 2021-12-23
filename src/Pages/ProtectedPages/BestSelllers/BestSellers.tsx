import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { groupDataTemplates } from "../FormikData";
import Test from "./Test";

const BestSellers = () => {
  // we use different one beacuse wee nned to acces context in upload
  const { contentData } = useContext(DataContext);

  return (
    <Test
      objectsToDisplay={
        contentData.bestSellers as unknown as Record<string, string>[][]
      }
      templateData={groupDataTemplates.bestSellers}
    />
  );
};

export default BestSellers;
