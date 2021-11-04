import React from "react";
import styled from "styled-components";
const Wrap = styled.div<StyleProps>`
  background: red;
  width: 30px;
  height: 50%;
  position: absolute;
  ${(props) => (props.left ? "left:0" : "right:0")};
  bottom: 50%;
  transform: translateY(50%);
  transition:1s all;
  // opacity change is provided by row wrapper
  opacity:0.001;
  z-index:10;
 
`;
interface StyleProps {
  left: boolean;
}
const Arrow = (props: any) => {
  const { onClick, left } = props;
  return <Wrap left={left} onClick={onClick} />;
};

export default Arrow;
