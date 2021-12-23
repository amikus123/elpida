import React, { useContext } from "react";
import Categories from "../../../components/complex/Categories/Categories";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import { DataContext } from "../../../context/DataContext";

const Dashboard = () => {
  // cards for each categorey
  const {contentData} = useContext(DataContext)
  
  return (
    <PageCenterWrapWithBread>
      
      <Categories data={contentData.dashboardCategories} />
    </PageCenterWrapWithBread>
  );
};

export default Dashboard;
