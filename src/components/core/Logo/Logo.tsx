import React from "react";

interface LogoProps {
  showText?: boolean;
}

const Logo = ({ showText = true }: LogoProps) => {
  return <p style={{ color: "white" }}>Elpida</p>;
};

export default Logo;
