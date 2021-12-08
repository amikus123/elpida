import React from 'react'
import {
  Draggable,
} from "react-beautiful-dnd";

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
item:{
  id: string;
  content: string;
},
index:number,
}
const DraggableItem = ({item,index}:DraggableItemProps) => {
  return (
    <Draggable
    draggableId={item.id}
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
          {item.content}
        </div>
      </div>
    )}
  </Draggable>
  )
}

export default DraggableItem
