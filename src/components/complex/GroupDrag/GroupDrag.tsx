import React, { useEffect, useState } from "react";
import {
  DragDropContext,
} from "react-beautiful-dnd";
import { GroupDragTemplate } from "../../../Pages/ProtectedPages/FormikData";
import DropSection from "./DropSection";



const reorder = (
  list: Iterable<any> | ArrayLike<any>,
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = ( 
  source: Iterable<any> | ArrayLike<any>,
  destination: Iterable<any> | ArrayLike<any>,
  droppableSource: { index: number; droppableId: string | number },
  droppableDestination: { index: number; droppableId: string | number }
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};


interface GroupDragInterface{
  data : Record<string,string>[][],
  templateData:GroupDragTemplate
}
const GroupDrag = ({data,templateData}:GroupDragInterface) => {
  const [state, setState] = useState< Record<string,string>[][]>(data);
  useEffect(()=>{
    setState(data)
  },[data])

  function onDragEnd(result: any) {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    const sourceIndex = +source.droppableId;
    const dropIndex = +destination.droppableId;
    // it dropped item in the same group
    if (sourceIndex === dropIndex) {
      const items = reorder(state[sourceIndex], source.index, destination.index);
      const newState = [...state];
      newState[sourceIndex] = items;
      setState(newState);
    } else {
      // dropped item in other group
      const result = move(state[sourceIndex], state[dropIndex], source, destination);
      const newState = [...state];
      console.log(result,newState)
      newState[sourceIndex] = result[sourceIndex];
      newState[dropIndex] = result[dropIndex];
      console.log(newState,"XDDD")
      setState(newState);
      newState[newState.length-1] = []
      // changes new data in db
      templateData.updateDb(newState)
    }
  }


  return (
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((cards, index) => (
           <DropSection key={index} cards={cards} index={index} />
          ))}
        </DragDropContext>
      </div>
  );
}


export default GroupDrag