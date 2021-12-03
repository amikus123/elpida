import React, { useContext,useEffect } from "react";
import styled from "styled-components";
import Categories from "../../../components/complex/Categories/Categories";
import { DashboardContext } from "../../../context/DashboardContext";

const Dashboard = () => {
  // cards for each categorey
  const {initzialzeDashboard,categories} = useContext(DashboardContext)
  
  useEffect(() => {
    console.log("INIT")

    console.log("INIT")
  }, [])

  return (
    <div>
      
      <Categories data={categories} />
    </div>
  );
};

export default Dashboard;
