import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import MyText from "../../../components/core/Text/MyText";

const getItemStyle = (isDragging: any, draggableStyle: any) => {
  return {
    userSelect: "none",
    padding: "1rem",
    margin: `0 0 0.5rem 0`,

    background: isDragging ? "white" : "none",
    border: "1px solid black",
    ...draggableStyle,
  };
};
interface DraggableItemProps {
  card: Record<string, string>;
  index: number;
}
const Item = styled.div`
  display: flex;
  justifycontent: center;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100%;
  height: 80px;
`;
const DraggableItem = ({ card, index }: DraggableItemProps) => {
  const { title, image, dragId } = card;
  return (
    <Draggable draggableId={dragId} index={index} key={dragId}>
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
            <MyText>Title:{title}</MyText>
          </Item>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
