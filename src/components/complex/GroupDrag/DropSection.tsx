import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DraggableItem from "./DraggableItem";

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: "0.5rem",
  width: 250,
  minHeight: "377px",
  margin: "0.5rem",
});

interface DropSectionProps {
  index: number;
  cards: Record<string, string>[];
}
const DropSection = ({ index, cards }: DropSectionProps) => {
  return (
    <Droppable droppableId={`${index}`}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          {...provided.droppableProps}
        >
          {cards.map((card, i) => (
            <DraggableItem key={i} card={card} index={i} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DropSection;
