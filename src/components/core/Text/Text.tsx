import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
type Variants = "header" | "normal" | "secondary" | "link" | "label";

type FontSizes = "bold" | "initial";

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
  | "label";
interface TextProps {
  children?: ReactNode;
  variant?: Variants;
  fontSize?: string;
  element?: PossibleElements;
  to?: string;
  labelTarget?: string;
  style?: {};
  boldness?: FontSizes;
}
interface StyleProps {
  variant: Variants;
  fontSize: string;
  boldness: FontSizes;
}

const Base = styled.p<StyleProps>`
  line-height: 1.5em;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.boldness};
  color: ${(props) =>
    props.variant === "secondary" ? props.theme.secondaryDark : "inherit"};
`;

const TextElement = styled(Base)<StyleProps>``;

const LinkElement = styled(Base)<StyleProps>`
  color: #007185;
  &:hover {
    color: #c7511f;
    text-decoration: underline;
  }
`;


const Text = ({
  children,
  variant = "normal",
  fontSize = "inherit",
  element = "p",
  to = "#",
  labelTarget = "",
  style = {},
  boldness = "initial",
}: TextProps) => {
  // get element to display from passed props

  const getElement = () => {
    let toReturn;
    if (element === "link") {
      toReturn = (
        <LinkElement
          as={Link}
          to={to}
          variant={variant}
          fontSize={fontSize}
          boldness={boldness}
          style={style}
        >
          {children}
        </LinkElement>
      );
    } else if (element === "label") {
      toReturn = (
        <TextElement
          boldness={boldness}
          as="label"
          variant={variant}
          htmlFor={labelTarget}
          fontSize={fontSize}
          style={style}
        >
          {children}
        </TextElement>
      );
    } else {
      toReturn = (
        <TextElement
          boldness={boldness}
          as={element}
          variant={variant}
          fontSize={fontSize}
          style={style}
        >
          {children}
        </TextElement>
      );
    }
    return toReturn;
  };
  return <>{getElement()}</>;
};

export default Text;
