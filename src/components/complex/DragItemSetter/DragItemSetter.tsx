import React, { useContext, useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { SnackbarTexts } from "../../../constans/snackbar";
import { ImageWithLink } from "../../../constans/types";
import { ElementContext } from "../../../context/ElementContext";
import Spinner from "../../core/Loading/Spinner";
import DragList from "./DragList";

export type DraggableData = ImageWithLink & { dragId: string; show: boolean };

// * allows user to toggle visibility of items and to adjust their order

interface ImageControlProps {
  imageData: ImageWithLink[];
  //* array, with active item ids in order
  orderOfVisibleItems: string[];
  //* functions, which updates the db and context
  updateOrdder: (list: string[]) => Promise<void>;
  deleteById: (s: string) => Promise<void>;
}
const DragItemSetter = ({
  orderOfVisibleItems,
  imageData: homeImages,
  updateOrdder,
  deleteById,
}: ImageControlProps) => {
  const [draggableItems, setDraggableItems] = useState<DraggableData[]>([]);

  // used to update state when new data is fetched

  const { updateSnackbar } = useContext(ElementContext);

  // creates functions, which passed to element allows to toggle show state
  const handleGenerator = (index: number) => {
    const f = () => {
      const newState = [...draggableItems];
      newState[index].show = !newState[index].show;
      // update global

      setDraggableItems(newState);
      updateOrdder(getListOFActive(newState))
        .then(() => {
          updateSnackbar(SnackbarTexts.succesfulDbChange, "green");
        })
        .catch(() => {
          updateSnackbar(SnackbarTexts.unsuccesfulDbChange, "red");
        });
    };
    return f;
  };

  const getData = (base: ImageWithLink[]) => {
    const res: DraggableData[] = [];
    const copy = [...base];
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
    // prevent empty objects from showing up
    return res.filter((item) => item["id"] !== undefined);
  };
  useEffect(() => {
    setDraggableItems(getData(homeImages));
  }, [homeImages]);
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
    updateOrdder(getListOFActive(newState))
      .then(() => {
        updateSnackbar(SnackbarTexts.succesfulDbChange, "green");
      })
      .catch(() => {
        updateSnackbar(SnackbarTexts.unsuccesfulDbChange, "red");
      });
    setDraggableItems(newState);
  }
  const getListOFActive = (newState = draggableItems) => {
    const res: string[] = [];
    newState.forEach((item: DraggableData) => {
      if (item.show) {
        res.push(item.id);
      }
    });
    return res;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {draggableItems.length === 0 ? (
        <Spinner showText={true} />
      ) : (
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <DragList
                images={draggableItems}
                handleGenerator={handleGenerator}
                deleteById={deleteById}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </DragDropContext>
  );
};

export default DragItemSetter;
