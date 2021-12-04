import { DraggableData } from "./ImageControl";
import ListElement from "./ListElement";


interface QuoteListProps {
  images: DraggableData[];
  handleGenerator: (index: number) => () => void;
}

const ImageList = ({ images, handleGenerator }: QuoteListProps) => {
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
export default ImageList