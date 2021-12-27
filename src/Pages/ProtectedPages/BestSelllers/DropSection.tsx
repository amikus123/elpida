import React, { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { DataContext } from "../../../context/DataContext";
import { ElementContext } from "../../../context/ElementContext";
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
  const { openModal } = useContext(ElementContext);
  const { editPair } = useContext(DataContext);

  return (
    <Droppable droppableId={`${index}`}>
      {(provided, snapshot) => (
        <div
          onDoubleClick={() => {
            editPair(index);
            openModal("item");
            console.log(1);
          }}
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
