import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import MyText from "../../core/Text/MyText";

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
  card: Record<string,string>;
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
  const {  title, image, link, bottomText, id} = card;
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
              {index}
              <br/>
              {id}
            <Image src={image} alt="failed to dowload preview" />
            <MyText>Title:{title}</MyText>
            <MyText>Link:{link}</MyText>
            <MyText>Bottom text:{bottomText}</MyText>
            <div><MyText>Remove </MyText></div>
            </Item>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
