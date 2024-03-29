import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import MyText from "../../core/Text/MyText";

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
  const { title, image, link, bottomText, id } = card;
  return (
    <Draggable draggableId={id} index={index} key={id}>
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
            <MyText>Link:{link}</MyText>
            <MyText>Bottom text:{bottomText}</MyText>
          </Item>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
