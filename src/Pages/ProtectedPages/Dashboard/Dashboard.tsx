import React, { useContext } from "react";
import Categories from "../../../components/complex/Categories/Categories";
import { PageCenterWrapWithBread } from "../../../components/containers/PageCenterWrap";
import { DashboardContext } from "../../../context/DashboardContext";

const Dashboard = () => {
  // cards for each categorey
  const {categories} = useContext(DashboardContext)
  
  return (
    <PageCenterWrapWithBread>
      <Categories data={categories} />
    </PageCenterWrapWithBread>
  );
};

export default Dashboard;
