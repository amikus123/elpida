import React from "react";
import styled from "styled-components";

type WrapTypes = "home" | "add";

const WrapWrap = styled.div`
  /* flex: 1; */
  /* idk if it should be removed */
`;

const Wrap = styled.div`
width:100%;

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
  className?:string;
}
const CardWrap = ({ children, type = "home",className="" }: CardProps) => {
  return (
    <WrapWrap className={className}>
      {type === "home" ? (
        <HomeWrap>{children}</HomeWrap>
      ) : (
        <AddWrap> {children}</AddWrap>
      )}
    </WrapWrap>
  );
};

export default CardWrap;
