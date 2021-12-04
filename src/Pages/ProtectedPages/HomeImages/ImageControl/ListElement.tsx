import React, { memo } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { DraggableData } from './ImageControl';
import ImageElement from './ImageElement';

interface ListElementProps {
  handleToggle: () => void;
  image: DraggableData;
  index: number;
}

function ListElement({ image, index, handleToggle }: ListElementProps) {
  return (
    <Draggable draggableId={image.dragId} index={index}>
      {(provided) => (
        // image etc
        <ImageElement
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

export default memo(ListElement)
