import React from "react";
import styled from "styled-components";
import MyText from "../Text/MyText";
interface TextProps {
  text?: string;
}

const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > span {
    margin: 0 0.5rem;
  }
`;
const Horizontal = styled.hr`
  flex: 1;
`;

const HorizontalText = ({ text = "" }: TextProps) => {
  return (
    <Divider>
      <Horizontal />
      <MyText variant="secondary">{text}</MyText>
      <Horizontal />
    </Divider>
  );
};

export default HorizontalText;
