import React, { useContext,useEffect } from "react";
import styled from "styled-components";
import Categories from "../../../components/complex/Categories/Categories";
import MyText from "../../../components/core/Text/MyText";
import { DashboardContext } from "../../../context/DashboardContext";

const Dashboard = () => {
  // cards for each categorey
  const {categories,fetchDashboardCategoryImages} = useContext(DashboardContext)
  
  useEffect(() => {
    fetchDashboardCategoryImages()
  }, [])

  return (
    <div>
      <Categories data={categories} />
    </div>
  );
};

export default Dashboard;
