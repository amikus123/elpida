import React, { useContext, useEffect, useState } from "react";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { ImageWithLink } from "../../../../types";
import { DashboardContext } from "../../../../context/DashboardContext";
import { DataContext } from "../../../../context/DataContext";
import ImageList from "./ImageList";

export type DraggableData = ImageWithLink & { dragId: string; show: boolean };

const ImageControl = () => {
  const { homeImages } = useContext(DashboardContext);
  const { dataToShow,updateSelectedImagesList } = useContext(DataContext);
  const [state, setState] = useState<DraggableData[]>([]);

  // used to update state when new data is fetched
  useEffect(() => {
    setState(getData());
  }, [homeImages]);

  // creates functions, which passed to element allows to toggle show state
  const handleGenerator = (index: number) => {
    const x = () => {
      const newState = [...state];
      newState[index].show = !newState[index].show;
      // update global
      setState(newState);
    updateSelectedImagesList(getListOFActive(newState))

    };
    return x;
  };

  const getData = () => {
    const res: DraggableData[] = [];
    const copy = [...homeImages];
    const { selectedHomeImages } = dataToShow;
    // first we go over the allowed list
    selectedHomeImages.forEach((id, index) => {
      const selectedIndex = copy.findIndex((image) => image.id === id);
      const selectedImage = copy.splice(selectedIndex, 1)[0];
      res.push({ ...selectedImage, dragId: `id-${index}`, show: true });
    });
    copy.forEach((item, index) => {
      res.push({
        dragId: `id-${index + selectedHomeImages.length}`,
        show: false,
        ...item,
      });
    });
    return res;
  };

  const reorder = (
    list: DraggableData[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    const newState = reorder(
      state,
      result.source.index,
      result.destination.index
    ) as DraggableData[];
    updateSelectedImagesList(getListOFActive(newState))
    setState(newState);
  }
  const getListOFActive = (newState=state) => {
    const res: string[] = [];
    newState.forEach((item: DraggableData) => {
      if (item.show) {
        res.push(item.id);
      }
    });
    console.log(res);
    return res;
  };
  return (
    <>
      {JSON.stringify(state)}
      <br></br>
      <br></br>
      {JSON.stringify(dataToShow)}
      <br></br>
      <br></br>

      {JSON.stringify(getListOFActive())}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <ImageList images={state} handleGenerator={handleGenerator} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default ImageControl;
