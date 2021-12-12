import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { CardData } from "../../../../constans/types";

const getItemStyle = (isDragging: any, draggableStyle: any) => {
  return {
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: "1rem",
    margin: `0 0 0.5rem 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  };
};
interface DraggableItemProps {
  card: CardData;
  index: number;
}
const Item = styled.div`
  display: flex;
  justifycontent: center;
  align-items:center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100%;
  height: 80px;
`;
const DraggableItem = ({ card, index }: DraggableItemProps) => {
  const {  title, image, link, bottomText } = card;
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <Item>
            <Image src={image} alt="failed to dowload preview" />
            <p>Title:{title}</p>
            <p>Link:{link}</p>
            <p>Bottom text:{bottomText}</p>
          </Item>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
