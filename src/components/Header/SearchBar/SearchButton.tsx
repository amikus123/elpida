import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
const Outer = styled.span`
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  padding: 0;
  text-decoration: none !important;
  vertical-align: middle;
  &:hover {
    /* border-color: #a88734 #9c7e31 #846a29; */
  }
`;
const Inner = styled.span`
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset;
  background: #febd69;
  display: flex;
  height: 40px;
  position: relative;
  overflow: hidden;
  width: 45px;
  border-radius: 0px 6px 6px 0px;
  justify-content: center;
  align-items: center;
  &:hover {
    /* border-color: #a88734 #9c7e31 #846a29; */
    background: linear-gradient(to bottom, #f5d78e, #eeb933);
  }
  &:active {
    transform: scale(1.1);
    box-shadow: 0 0 0 2px #f90, 0 0 0 3px rgba(255, 153, 0, 0.5);

  }
`;
const Text = styled.span`
  background-color: transparent;
  border: 0;
  display: block;
  font-family: Arial, sans-serif;
  font-size: 13px;
  line-height: 29px;
  margin: 0;
  outline: 0;
  padding: 0 10px 0 11px;
  text-align: center;
  white-space: nowrap;
`;

const CustomIcon = styled(SearchIcon)`
  /* background-color: transparent;
  border: 0;
  display: block;
  font-family: Arial, sans-serif;
  font-size: 13px;
  line-height: 29px;
  margin: 0;
  outline: 0;
  padding: 0 10px 0 11px;
  text-align: center;
  white-space: nowrap; */
  font-size: 1.75rem!important;
`;

const SearchButton = () => {
  return (
    <Outer>
      <Inner>
          <CustomIcon />
      </Inner>
    </Outer>
  );
};

export default SearchButton;
