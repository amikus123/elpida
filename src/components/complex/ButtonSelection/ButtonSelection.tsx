import React from "react";
import styled from "styled-components";
import { AlocholCategoties } from "../../../Pages/ProtectedPages/Inventory/Inventory";

interface ButtonSelectionProps {
  options: AlocholCategoties[];
  selected: AlocholCategoties;
  setSelected: React.Dispatch<React.SetStateAction<AlocholCategoties>>;
}
const Wrap = styled.div`
flex-direction:row;
display:flex;
`;
const Button = styled.div`
  padding:1rem;
  font-size:1.5rem;
  backgroud-color:grey;
  outline:1px solid red;
  cursor:pointer;
`;

const ButtonSelection = ({
  options,
  selected,
  setSelected,
}: ButtonSelectionProps) => {
  return (
    <Wrap>
      {options.map((item, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              setSelected(item);
            }}
          >
            {item}
          </Button>
        );
      })}
    </Wrap>
  );
};

export default ButtonSelection;
