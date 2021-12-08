import React, { memo } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { DraggableData } from './DragItemSetter';
import ImageElement from './ImageElement';

interface DragListItemProps {
  handleToggle: () => void;
  image: DraggableData;
  index: number;
}

function DragListItem({ image, index, handleToggle }: DragListItemProps) {
  return (
    <Draggable draggableId={image.dragId} index={index}>
      {(provided) => (
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

export default memo(DragListItem)
