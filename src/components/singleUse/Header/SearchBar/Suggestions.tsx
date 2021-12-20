import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TextLink } from "../../../../constans/types";
import { COLORS } from "../../../../styles/styleValues";
import MyText from "../../../core/Text/MyText";

const Wrap = styled.ul`
  position: absolute;
  width: 100%;
  left:0;
  visibility:hidden;
`;
interface SuggsetionsProps {
  suggsetions: TextLink[];
}

const ListElement = styled(Link)`
  padding: 0.3rem;
  display:block;
  background-color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.lightGrey};
  }
`;
const Suggestions = ({ suggsetions }: SuggsetionsProps) => {
  return (
    <Wrap id="suggestions" >
      {suggsetions.map((item, index) => {
        return (
          <ListElement key={index}  to={item.link}>
            {item.title}
          </ListElement>
        );
      })}
    </Wrap>
  );
};

export default Suggestions;
