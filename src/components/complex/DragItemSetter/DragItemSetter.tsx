import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { ImageWithLink } from "../../../types";
import DragList from "./DragList";

export type DraggableData = ImageWithLink & { dragId: string; show: boolean };

// * allows user to toggle visibility of items and to adjust their order

interface ImageControlProps{
  imageData:ImageWithLink[],
  //* array, with active item ids in order
  orderOfVisibleItems:string[],
  //* fucntions, which updates the db and context
  updateOrdder: (list: string[]) => void,
}
const DragItemSetter = ({orderOfVisibleItems,imageData: homeImages,updateOrdder}:ImageControlProps) => {

  const [draggableItems, setDraggableItems] = useState<DraggableData[]>([]);

  // used to update state when new data is fetched
  useEffect(() => {
    setDraggableItems(getData());
  }, [homeImages]);

  // creates functions, which passed to element allows to toggle show state
  const handleGenerator = (index: number) => {
    const x = () => {
      const newState = [...draggableItems];
      newState[index].show = !newState[index].show;
      // update global
      setDraggableItems(newState);
      updateOrdder(getListOFActive(newState));
    };
    return x;
  };

  
  const getData = () => {
    const res: DraggableData[] = [];
    const copy = [...homeImages];
    // first we go over the allowed list
    orderOfVisibleItems.forEach((id, index) => {
      const selectedIndex = copy.findIndex((image) => image.id === id);
      const selectedImage = copy.splice(selectedIndex, 1)[0];
      res.push({ ...selectedImage, dragId: `id-${index}`, show: true });
    });
    copy.forEach((item, index) => {
      res.push({
        dragId: `id-${index + orderOfVisibleItems.length}`,
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
      draggableItems,
      result.source.index,
      result.destination.index
    ) as DraggableData[];
    updateOrdder(getListOFActive(newState));
    setDraggableItems(newState);
  }
  const getListOFActive = (newState = draggableItems) => {
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
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <DragList images={draggableItems} handleGenerator={handleGenerator} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragItemSetter;
