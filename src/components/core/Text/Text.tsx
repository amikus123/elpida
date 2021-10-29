import React from "react";
import styled from "styled-components";

type Variants = "header" | "normal" | "secondary";
interface TextProps {
  children?: string;
  variant?: Variants;
}
interface StyleProps {
  variant: Variants;
}



const Text = ({ children, variant = "normal" }: TextProps) => {
  const Header = styled.h4<StyleProps>`
    line-height: 24px;
    font-size: ${(props) =>
      props.variant === "header" ? "1rem" : "inherit"};;
    font-weight:  ${(props) =>
      props.variant === "header" ? "bolder" : "normal"};
    color: ${(props) =>
      props.variant === "secondary" ? props.theme.secondaryDark : "inherit"};
  `;
  const getElement = () => {
    switch (variant) {
      case "header":
        return <Header variant={variant}>{children}</Header>;
      default:
        return (
          <Header as="span" variant={variant}>
            {children}
          </Header>
        );
    }
  };

  return <>{getElement()}</>;
};

export default Text;
