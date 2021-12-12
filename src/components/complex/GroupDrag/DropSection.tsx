import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { CardData } from "../../../constans/types";
import DraggableItem from "./DraggableItem";


const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: "0.5rem",
  width: 250,
});

interface DropSectionProps{
  index:number,
  cards:CardData[]
}
const DropSection = ({index,cards}:DropSectionProps) => {
  return (
    <Droppable droppableId={`${index}`}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          {...provided.droppableProps}
        >
          {cards.map((card, index) => (
            <DraggableItem key={index}  card={card} index={index}/>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DropSection;
