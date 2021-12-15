import React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Wrap = styled.div<StyleProps>`
  background: #fff;
  width: 30px;
  height: 50%;
  position: absolute;
  ${(props) => (props.left ? "left:0" : "right:0")};
  bottom: 50%;
  transform: translateY(50%);
  transition: 1s all;
  // opacity change is provided by row wrapper
  opacity: 0.01;
  z-index: 10;
  border-radius: 3px;
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
box-shadow: 0 1px 3px #888;
`;
const InternalWrap = styled.div`
  /* border: 1px solid #007185; */
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;

  &:active{
    border: 1px solid #007185;
  }
  & *{
    display:flex;
  justify-content: center;
  align-items: center;
}
`;
interface StyleProps {
  left: boolean;
}
const Arrow = (props: any) => {
  const { onClick, left } = props;
  return (
    <Wrap left={left} onClick={onClick}>
      <InternalWrap>
        {left ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
      </InternalWrap>
    </Wrap>
  );
};

export default Arrow;
