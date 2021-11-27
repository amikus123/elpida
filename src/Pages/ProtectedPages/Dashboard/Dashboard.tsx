import React, { useContext } from "react";
import styled from "styled-components";
import Categories from "../../../components/complex/Categories/Categories";
import MyText from "../../../components/core/Text/MyText";
import { DashboardContext } from "../../../context/DashboardContext";

const Dashboard = () => {
  // cards for each categorey
  const {categories} = useContext(DashboardContext)


  return (
    <div>
      <MyText>Which itemsasdasdsd would you like to edit?</MyText>

      <MyText>Which itemsasdasdsd would you like to edit?</MyText>
      <Categories data={categories} />
    </div>
  );
};

export default Dashboard;
