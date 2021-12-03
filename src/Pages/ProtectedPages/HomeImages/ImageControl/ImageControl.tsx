import React, { useState } from "react";
import styled from "styled-components";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ImageWithLink } from "../../../../types";
import { profile } from "console";
import ImageElement from "./ImageElement";

const reorder = (
  list: Iterable<unknown> | ArrayLike<unknown>,
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const QuoteItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: 8px;
  background-color: lightblue;
  padding: 8px;
`;

function Quote({ image, index }: { image: ImageWithLink; index: any }) {
  return (
    <Draggable draggableId={image.title} index={index}>
      {(provided) => (
        // image etc
        <ImageElement imageData={image} active={true}
        ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        />
        // <QuoteItem
        //   ref={provided.innerRef}
        //   {...provided.draggableProps}
        //   {...provided.dragHandleProps}
        // >
        //   {image.title}
        // </QuoteItem>
      )}
    </Draggable>
  );
}

const QuoteList = React.memo(function QuoteList({ quotes }: { quotes: any }) {
  return quotes.map((quote: any, index: number) => (
    <Quote image={quote} index={index} key={quote.id} />
  ));
});

interface ImageControlProps {
  homeImages: ImageWithLink[];
}
type DraggableData = ImageWithLink & {id:string}
const ImageControl = ({ homeImages }: ImageControlProps) => {
  // statte

  const initial = homeImages.map((item,index) => {
    const custom: DraggableData = {
      id: `id-${index}`,
      ...item
    };

    return custom;
  });
  
  const [state, setState] = useState({ quotes: initial });

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    ) as any

    setState({ quotes });
  }

  return (
    <>
      {JSON.stringify(homeImages)}
      <br></br>
      <DragDropContext onDragEnd={onDragEnd}>
        {JSON.stringify(state)}
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <QuoteList quotes={state.quotes} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default ImageControl;
