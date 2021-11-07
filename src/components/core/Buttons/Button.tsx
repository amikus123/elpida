import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Outer = styled(Link)`
  width: 100%;
  background-color: #fff;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  border-radius: 3px;
  border: 1px solid;
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
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  display: block;
  height: 29px;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  &:hover {
    /* border-color: #a88734 #9c7e31 #846a29; */
    background: linear-gradient(to bottom, #f5d78e, #eeb933);
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

interface ButtonProps {
  text?: string;
  children?: any;
  to?:string
}
const Button = ({ text = "", children = "" ,to=""}: ButtonProps) => {
  return (
    <>
    {to===""? (<Outer as="span">
      <Inner>
        <Text>
          {text}
          {children}
        </Text>
      </Inner>
    </Outer>): (<Outer to={to}>
      <Inner>
        <Text>
          {text}
          {children}
        </Text>
      </Inner>
    </Outer>)}
    </>
   
  );
};

export default Button;
