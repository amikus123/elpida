import React from 'react'
import {
  Draggable,
} from "react-beautiful-dnd";
import { CardData } from '../../../../constans/types';

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
interface DraggableItemProps{
card:CardData,
index:number,
}
const DraggableItem = ({card,index}:DraggableItemProps) => {
  return (
    <Draggable
    draggableId={card.id}
    index={index}
  >

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          xxxx
        </div>
      </div>
    )}
  </Draggable>
  )
}

export default DraggableItem
