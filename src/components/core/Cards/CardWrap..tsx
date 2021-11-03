import React from "react";
import styled from "styled-components";

type WrapTypes = "home" | "add";

const WrapWrap = styled.div`
  flex: 1;
`;

const Wrap = styled.div`
width:100%;
  height: 420px;
  min-width: 275px;
  max-width: 350px;
  display:flex;
  flex-direction:column;
  /* align-items: center */
  justify-content: space-between;
  ;

  box-sizing: border-box;

`;

const HomeWrap = styled(Wrap)`
  background-color: white;
  padding: 10px 20px;
`;

const AddWrap = styled(Wrap)`
`;

interface CardProps {
  children: any;
  type?: WrapTypes;
}
const CardWrap = ({ children, type = "home" }: CardProps) => {
  return (
    <WrapWrap>
      {type === "home" ? (
        <HomeWrap>{children}</HomeWrap>
      ) : (
        <AddWrap> {children}</AddWrap>
      )}
    </WrapWrap>
  );
};

export default CardWrap;
