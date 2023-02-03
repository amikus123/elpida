import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { DraggableData } from "./DragItemSetter";
import ImageElement from "./ImageElement";

interface DragListItemProps {
  handleToggle: () => void;
  image: DraggableData;
  index: number;
  deleteById: (s: string) => Promise<void>;
}

function DragListItem({
  image,
  index,
  handleToggle,
  deleteById,
}: DragListItemProps) {
  return (
    <Draggable draggableId={image.dragId} index={index}>
      {(provided) => (
        <ImageElement
          deleteById={deleteById}
          handleToggle={handleToggle}
          imageData={image}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        />
      )}
    </Draggable>
  );
}

export default memo(DragListItem);
