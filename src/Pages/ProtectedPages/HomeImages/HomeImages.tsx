import React, { useContext, useState } from "react";
import ImageAdder from "./ImageAdder/ImageAdder";
import ImageControl from "./ImageControl/ImageControl";
import styled from "styled-components";
import { DashboardContext } from "../../../context/DashboardContext";
import { DataContext } from "../../../context/DataContext";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HomeImages = () => {

  
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => setSelected(!selected);

  return (
    <Wrap>
          <ImageControl />
          <ImageAdder />
    </Wrap>
  );
};

export default HomeImages;
