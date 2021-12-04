import React, { useContext } from "react";
import Categories from "../../../components/complex/Categories/Categories";
import { DashboardContext } from "../../../context/DashboardContext";

const Dashboard = () => {
  // cards for each categorey
  const {categories} = useContext(DashboardContext)
  
  return (
    <div>
    
      <Categories data={categories} />
    </div>
  );
};

export default Dashboard;
