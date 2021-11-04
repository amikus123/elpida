import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
type Variants = "header" | "normal" | "secondary" | "link";
type PossibleElements =
  | "p"
  | "span"
  | "h2"
  | "h1"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "link"
  | "imageLink";
interface TextProps {
  children?: ReactNode;
  variant?: Variants;
  fontSize?: string;
  element?: PossibleElements;
  to?: string;
  style?: {}
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
  to = "#",
  style={},
}: TextProps) => {
  // get element to display from passed props

  const TextElement = styled.h4<StyleProps>`
    line-height: 24px;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) =>
      props.variant === "header" ? "bolder" : "normal"};
    color: ${(props) =>
      props.variant === "secondary" ? props.theme.secondaryDark : "inherit"};
  `;
  const LinkElement = styled(Link)<StyleProps>`
    line-height: 24px;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) =>
      props.variant === "header" ? "bolder" : "normal"};
    /* color: ${(props) =>
      props.variant === "secondary" ? props.theme.secondaryDark : "inherit"}; */
    color: #007185;
    &:hover {
      color: #c7511f;
      text-decoration: underline;
    }
  `;

  return (
    <>
      {element === "link" ? (
        <LinkElement to={to} variant={variant} fontSize={fontSize}  style={style}>
          {children}
        </LinkElement>
      ) : (
        <TextElement variant={variant} as={element} fontSize={fontSize} style={style}>
          {children}
        </TextElement>
      )}
    </>
  );
};

export default Text;