import React from "react";
import styled from "styled-components";

type Variants = "header" | "normal" | "secondary";
type Element = "p" | "span" | "h2";
interface TextProps {
  children?: string;
  variant?: Variants;
  fontSize?: string;
  element?: Element;
}
interface StyleProps {
  variant: Variants;
  fontSize: string;
}

const Text = ({
  children,
  variant = "normal",
  fontSize = "1rem",
  element = "p",
}: TextProps) => {
  const Header = styled.h4<StyleProps>`
    line-height: 24px;
    font-size: ${(props) =>
      props.variant === "header" ? props.fontSize : props.fontSize};
    font-weight: ${(props) =>
      props.variant === "header" ? "bolder" : "normal"};
    color: ${(props) =>
      props.variant === "secondary" ? props.theme.secondaryDark : "inherit"};
  `;

  return (
    <Header variant={variant} as={element} fontSize={fontSize}>
      {children}
    </Header>
  );
};

export default Text;
