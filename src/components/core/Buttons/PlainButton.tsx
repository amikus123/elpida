import React from "react";
import styled from "styled-components";

type ButtonTypes = "normal" | "submit";
interface ButtonProps {
  color?: "yellow" | "white";
  variant?: "button" | "link" | "submit";
  text: string;
  style?: Record<string, string>;
  onClick?: () => void;
  disabled?: boolean;
}
interface ButtonStyle {
  color?: "yellow" | "white";
}

const Button = styled.button<ButtonStyle>`
  width: 100%;
  border: 0;
  display: block;
  font-size: inherit;
  line-height: 1.8125em;
  margin: 0;
  outline: 0;
  border: 1px solid;
  padding: 0 0.625em 0 0.6875em;
  text-align: center;
  border-radius: 0.3125em;
  background-color: ${(props) =>
    props.color === "yellow" ? props.theme.yellow : props.theme.white};
  border-color: ${(props) =>
    props.color === "yellow"
      ? props.theme.yellowBorder
      : props.theme.whiteBorder};
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.darkText};
  cursor: pointer;
  color: #0f1111;
  &:hover {
    background-color: ${(props) =>
      props.color === "yellow"
        ? props.theme.yellowBorder
        : props.theme.whiteButtonHover};
  }
  &:active{
    background-color: ${(props) =>
      props.color === "yellow"
        ?"#e4d039"
        : props.theme.whiteButtonHover};
  }
  border-color: ${(props) =>
      props.color === "yellow"
        ?"#e4d039"
        : props.theme.whiteButtonHover};
  }

`;
const PlainButton = ({
  color = "yellow",
  variant = "button",
  onClick = () => {},
  disabled = false,
  style = {},
  text,
}: ButtonProps) => {
  const getElement = () => {
    switch (variant) {
      case "button":
        return (
          <Button
            color={color}
            onClick={onClick}
            disabled={disabled}
            style={style}
          >
            {text}
          </Button>
        );
      case "submit":
        return (
          <Button
            style={style}
            disabled={disabled}
            color={color}
            as="input"
            type="submit"
            value={text}
            onClick={onClick}
          />
        );
      default:
        return (
          <Button
            style={style}
            color={color}
            as="a"
            type="submit"
            onClick={onClick}
          >
            {text}
          </Button>
        );
    }
  };
  return <>{getElement()}</>;
};

export default PlainButton;
