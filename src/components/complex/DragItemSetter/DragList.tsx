import { DraggableData } from "./DragItemSetter";
import ListElement from "./DragListItem";

interface DragListProps {
  images: DraggableData[];
  handleGenerator: (index: number) => () => void;
  deleteById: (s: string) => Promise<void>;
}

const DragList = ({ images, handleGenerator, deleteById }: DragListProps) => {
  return (
    <>
      {images.map((image: DraggableData, index: number) => (
        <ListElement
          image={image}
          index={index}
          key={image.dragId}
          deleteById={deleteById}
          handleToggle={handleGenerator(index)}
        />
      ))}
    </>
  );
};
export default DragList;
