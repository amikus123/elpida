import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../styles/styleValues";

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
  |"li"
  | "link"
  | "label";
// presetColor should always be poassed using COLORs enym
interface TextProps {
  children?: ReactNode;
  variant?: Variants;
  fontSize?: string;
  element?: PossibleElements;
  to?: string;
  labelTarget?: string;
  style?: {};
  boldness?: FontSizes;
  presetColor?: string;
  onClick?: (arg?:any) =>any
}
interface StyleProps {
  variant: Variants;
  fontSize: string;
  presetcolor: string;
  boldness: FontSizes;
}

const Base = styled.p<StyleProps>`
  line-height: 1.5em;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.boldness};
  color: ${(props) => props.presetcolor};
`;

const TextElement = styled(Base)<StyleProps>``;

const LinkElement = styled(Base)<StyleProps>`
  color: ${COLORS.darkBlue};
  &:hover {
    color: ${COLORS.mediumOrange};
    text-decoration: underline;
  }
`;

const MyText = ({
  children = "",
  variant = "normal",
  fontSize = "inherit",
  element = "p",
  to = "",
  labelTarget = "",
  style = {},
  boldness = "initial",
  presetColor = "inherit",
  onClick= ()=>{}
}: TextProps) => {
  // get element to display from passed props

  const getElement = () => {
    let toReturn;
    if (element === "link") {
      toReturn = (
        <LinkElement
        onClick={onClick}

          as={Link}
          to={to}
          variant={variant}
          fontSize={fontSize}
          boldness={boldness}
          style={style}
          presetcolor={presetColor}
        >
          {children}
        </LinkElement>
      );
    } else if (element === "label") {
      toReturn = (
        <TextElement
        onClick={onClick}
        boldness={boldness}
          as="label"
          variant={variant}
          htmlFor={labelTarget}
          fontSize={fontSize}
          style={style}
          presetcolor={presetColor}
        >
          {children}
        </TextElement>
      );
    } else if (to !== "") {
      toReturn = (
        <TextElement
        onClick={onClick}
        boldness={boldness}
          as={Link}
          variant={variant}
          fontSize={fontSize}
          style={style}
          presetcolor={presetColor}
          to={to}
        >
          {children}
        </TextElement>
      );
    } else {
      toReturn = (
        <TextElement
        onClick={onClick}
          boldness={boldness}
          as={element}
          variant={variant}
          fontSize={fontSize}
          style={style}
          presetcolor={presetColor}
        >
          {children}
        </TextElement>
      );
    }
    return toReturn;
  };
  return <>{getElement()}</>;
};

export default MyText;
