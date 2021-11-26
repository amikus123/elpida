import React, { useContext } from "react";
import styled from "styled-components";
import { ElementContext } from "../../../context/ElementContext";
import ModalWrap from "../../core/Modals/ModalWrap";
interface ShadeProps {
  selectedModal: boolean;
  showOverlay: boolean;
}
interface ModalProps {
  selectedModal: boolean;
}

const AbsoluteWrap = styled.div<ShadeProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: ${(props) => (props.selectedModal ? 150 : 50)};
  visibility: ${(props) => (props.showOverlay ? "visible" : "hidden")};
`;
const Shade = styled.div`
  position: fixed;
  width: 100vw;
  background-color: #000;
  opacity: 0.6;
  height: 100vh;
`;
const Middle = styled.div<ModalProps>`
  visibility: ${(props) => (props.selectedModal ? "visible" : "hidden")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Overlay = () => {
  const { showOverlay, selectedModal, setDropdown, reset } =
    useContext(ElementContext);

  return (
    <AbsoluteWrap
      selectedModal={selectedModal !== "none"}
      showOverlay={showOverlay}
      onClick={() => {
        reset();
      }}
    >
      <Shade />
      <Middle
        selectedModal={selectedModal !== "none"}
        onClick={(e) => {
          e.stopPropagation();
          setDropdown(false);
        }}
      >
        <ModalWrap />
      </Middle>
    </AbsoluteWrap>
  );
};

export default Overlay;
