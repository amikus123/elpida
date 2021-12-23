import React, { useContext, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Spinner from "../../../components/core/Loading/Spinner";
import { DataContext } from "../../../context/DataContext";
import { GroupDragTemplate } from "../FormikData";
import DropSection from "./DropSection";
import { v4 as uuidv4 } from "uuid";

const Wrap = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
`
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

interface GroupDragInterface {
  data: Record<string, string>[][];
  templateData: GroupDragTemplate;
}
const GroupDrag = ({ data, templateData }: GroupDragInterface) => {

  const { bestSellerPair ,editPair} = useContext(DataContext);


  const [state, setState] = useState<Record<string, string>[][]>([[],[]]);
  useEffect(() => {
    setState(data);
    // check if each item has dragId, if not add
    const copy = [...data]
    copy.forEach((arr)=>{
      arr.forEach((item)=>{
        if(item["dragId"] === undefined){
          item["dragId"] = uuidv4()
        }
      })
    })
    console.log(data,"XDDDda")
  }, [data]);
  useEffect(()=>{
    let {column,item} = bestSellerPair
    if(column !== -1 && item !== null){
      const myItem = item as unknown as Record<string,string>
      // we reset the pair
      editPair()
      // set db
      // set local state
      const copy = state
      const selectedArr = state[column]
      selectedArr.push(myItem )
      copy[column] = selectedArr
      setState(copy)
      templateData.updateDb(copy);

    }
  },[bestSellerPair])
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
      const items = reorder(
        state[sourceIndex],
        source.index,
        destination.index
      );
      const newState = [...state];
      newState[sourceIndex] = items;
      setState(newState);
    } else {
      // dropped item in other group
      const result = move(
        state[sourceIndex],
        state[dropIndex],
        source,
        destination
      );
      const newState = [...state];
      newState[sourceIndex] = result[sourceIndex];
      newState[dropIndex] = result[dropIndex];
      setState(newState);
      newState[newState.length - 1] = [];
      // changes new data in db
      templateData.updateDb(newState);
    }
  }


  return (
    <Wrap>
      {data.length===0  ? (
        <Spinner showText={true} />
      ) : (
        <DragDropContext onDragEnd={onDragEnd} >
          {state.map((cards, index) => (
            <DropSection key={index} cards={cards} index={index} />
          ))}
        </DragDropContext>
      )}
    </Wrap>
  );
};

export default GroupDrag;
