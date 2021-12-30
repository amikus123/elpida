import React, { useContext } from "react";
import styled from "styled-components";
import { ElementContext } from "../../../context/ElementContext";

const ContentWrap = styled.div`
  position: absolute;
  bottom: 20px;
  width: 80vw;
  min-height: 60px;
  padding: 1rem;
  font-size: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  line-height:30px;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1110;
  padding: 1rem;
  pointer-events: none;
`;

const Snackbar = () => {
  const { snackbarValue } = useContext(ElementContext);
  let { show, color, text } = snackbarValue;
  return (
    <Overlay style={{ visibility: show ? "visible" : "hidden" }}>
      <ContentWrap style={{ backgroundColor: color }}>
        <span>{text}</span>
      </ContentWrap>
    </Overlay>
  );
};

export default Snackbar;
