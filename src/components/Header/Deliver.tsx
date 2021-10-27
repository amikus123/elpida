import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import RoomIcon from '@mui/icons-material/Room';
import styled from "styled-components";
import HiddenLogin from "./List/HiddenLogin";
import { OverlayContext } from "../../context/OverlayContext";
const Wrapper = styled.div`
  margin: 5px 0;
  padding:0.5rem 0;
  display: flex;
  align-items: center;
  position: relative;
  max-height: 54px;
  border-radius: 2px;
  &:hover {
    outline: 1px solid #fff;
  };
  cursor:pointer;
`;
const CustomLink = styled(Link)`
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
  const { setOverlay } = useContext(OverlayContext);

  return (
    <Wrapper
     
    >
        <RoomIcon style={{color:"white"}}/>
      <CustomLink to="/orders">
        Deliver to<br />
        <Bold>
          American Samoa
        </Bold>
      </CustomLink>
      <HiddenLogin />
    </Wrapper>
  );
};

export default Deliver;
