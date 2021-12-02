import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



const reorder = (list: Iterable<unknown> | ArrayLike<unknown>, startIndex: number, endIndex: number) => {
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

function Quote({ quote, index }:{quote:any,index:any}) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {provided => (
        // image etc
        <QuoteItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {quote.content}
        </QuoteItem>
      )}
    </Draggable>
  );
}

const QuoteList = React.memo(function QuoteList({ quotes }:{quotes:any}) {
  return quotes.map((quote: any, index: number) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ));
});

const  Test =()=> {
  // statte
  const initial = Array.from({ length: 10 }, (v, k) => k).map(k => {
    const custom: any = {
      id: `id-${k}`,
      content: `Quote ${k}`
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
    );

    setState({ quotes });
  }

  return (
    <>
    <DragDropContext onDragEnd={onDragEnd}>
      {JSON.stringify(state)}
      <Droppable droppableId="list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <QuoteList quotes={state.quotes} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    </>
  );
}


export default Test