import React, { useContext } from "react";
import Categories from "../../../components/complex/Categories/Categories";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import { DataContext } from "../../../context/DataContext";

const Dashboard = () => {
  // cards for each categorey
  const {objectsToDisplay} = useContext(DataContext)
  
  return (
    <PageCenterWrapWithBread>
      <Categories data={objectsToDisplay.dashboardCategories} />
    </PageCenterWrapWithBread>
  );
};

export default Dashboard;
