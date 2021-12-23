import React from "react";
import styled from "styled-components";
import { AlocholCategoties } from "../../../Pages/ProtectedPages/Inventory/Inventory";
import { COLORS } from "../../../styles/styleValues";
import { capitalizeFirstLetter } from "../../../utils/stringFunctions";

interface ButtonSelectionProps {
  options: AlocholCategoties[];
  selected: AlocholCategoties;
  setSelected: React.Dispatch<React.SetStateAction<AlocholCategoties>>;
}
const Wrap = styled.div`
flex-direction:row;
display:flex;
`;


interface ButtonProps{
  selected:boolean;
}
const Button = styled.div<ButtonProps>`
  padding:1rem;
  font-size:1.5rem;
  backgroud-color:grey;
  outline:1px solid red;
  cursor:pointer;
  color: ${(props) => props.selected?COLORS.white:"red"};
  background-color: ${(props) => props.selected?"red":COLORS.white};

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
            selected={selected===item}
>
            {capitalizeFirstLetter(item)}
          </Button>
        );
      })}
    </Wrap>
  );
};

export default ButtonSelection;
