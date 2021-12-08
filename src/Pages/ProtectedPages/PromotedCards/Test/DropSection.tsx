import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DraggableItem from "./DraggableItem";


const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: "0.5rem",
  width: 250,
});

interface DropSectionProps{
  index:number,
  el: {
    id: string;
    content: string;
}[]
}
const DropSection = ({index,el}:DropSectionProps) => {
  return (
    <Droppable droppableId={`${index}`}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          {...provided.droppableProps}
        >
          {el.map((item, index) => (
            <DraggableItem key={index}  item={item} index={index}/>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DropSection;
