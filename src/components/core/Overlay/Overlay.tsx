import React, { useContext } from "react";
import styled from "styled-components";
import { OverlayContext } from "../../../context/OverlayContext";
const Test = styled.div`
  position: fixed;
  width: 100vw;
  background-color: #000;
  opacity: 0.6;
  height: 100vh;
  z-index: 50;
`;

const Overlay = () => {
  const { showOverlay } = useContext(OverlayContext);

  return (
    <Test style={{ visibility: showOverlay ? "visible" : "hidden" }}></Test>
  );
};

export default Overlay;
