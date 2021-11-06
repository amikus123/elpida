import React from "react";
import styled from "styled-components";

type ButtonTypes = "normal" | "submit"
interface ButtonProps {
  color?: "yellow" | "white";
  variant?: "button" | "link" | "submit";
  text: string;
  onClick?: () =>void;
}
interface ButtonStyle {
  color?: "yellow" | "white";
}
const Button = styled.button<ButtonStyle>`
  width: 100%;
  border: 0;
  display: block;
  font-size: 13px;
  line-height: 29px;
  margin: 0;
  outline: 0;
  border: 1px solid;
  padding: 0 10px 0 11px;
  text-align: center;
  border-radius: 5px;
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
`;
const PlainButton = ({
  color = "yellow",
  variant = "button",
  onClick = () => {},

  text,
}: ButtonProps) => {
  const getElement = () => {
    switch (variant) {
      case "button":
        return (
          <Button color={color} onClick={onClick}>
            {text}
          </Button>
        );
      case "submit":
        return (
          <Button
            color={color}
            as="input"
            type="submit"
            value={text}
            onClick={onClick}
          />
        );
      default:
        return (
          <Button color={color} as="a" type="submit" onClick={onClick}>
            {text}
          </Button>
        );
    }
  };
  return <>{getElement()}</>;
};

export default PlainButton;
