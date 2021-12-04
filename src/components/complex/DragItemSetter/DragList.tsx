import { DraggableData } from "./DragItemSetter";
import ListElement from "./DragListItem";


interface DragListProps {
  images: DraggableData[];
  handleGenerator: (index: number) => () => void;
}

const DragList = ({ images, handleGenerator }: DragListProps) => {
  return (
    <>
      {images.map((image: DraggableData, index: number) => (
        <ListElement
          image={image}
          index={index}
          key={image.dragId}
          handleToggle={handleGenerator(index)}
        />
      ))}
    </>
  );
};
export default DragList