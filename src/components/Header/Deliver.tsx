import React, { useContext } from "react";
import RoomIcon from "@mui/icons-material/Room";
import styled from "styled-components";
import HiddenLogin from "./List/HiddenLogin";
import { ElementContext } from "../../context/ElementContext";
import { DataContext } from "../../context/DataContext";
import { MODALS } from "../../constans/routes";

const Wrapper = styled.div`
  margin: 5px 0;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  position: relative;
  max-height: 54px;
  border-radius: 2px;
  &:hover {
    outline: 1px solid #fff;
  }
  cursor: pointer;
`;
const CustomLink = styled.p`
  font-size: 0.875rem;
  margin: 4px;

  color: #fff;
  white-space: pre-wrap;
`;
const Bold = styled.span`
  font-weight: bold;
  color: #fff;
  display: flex;
  min-height: 17.33px;
  align-items: center;
`;
const Deliver = () => {
  const { openModal } = useContext(ElementContext);
  const { selectedLocation } = useContext(DataContext);

  return (
    <Wrapper
      onClick={() => {
        openModal(MODALS.LOCATION);
      }}
    >
      <RoomIcon style={{ color: "white" }} />
      <CustomLink>
        Deliver to
        <br />
        <Bold>{selectedLocation}</Bold>
      </CustomLink>
      <HiddenLogin />
    </Wrapper>
  );
};

export default Deliver;
