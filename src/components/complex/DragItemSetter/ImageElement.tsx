import React from "react";
import Toggle from "react-toggle";
import styled from "styled-components";
import MyText from "../../core/Text/MyText";
import { DraggableData } from "./DragItemSetter";

const Imgae = styled.img`
  width: min(500px, 75vw);
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImgaeWrap = styled.div`
  width: min(500px, 75vw);
  height: 120px;
  position: relative;
  overflow: hidden;
`;

const Wrap = styled.div<{ show: boolean }>`
  padding: 1rem;

  background-color: ${(props) => (props.show ? `white` : `#C4C4C4`)};
  display: flex;
  transition: 0.5s background-color;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  > * {
    margin: 0.25rem;
  }
`;
// we cam cut like half of the image
interface ImageElementProps {
  imageData: DraggableData;
  handleToggle: () => void;
  deleteById: (s: string) => Promise<void>;
}

// addinitional properties are due to Drag api
const ImageElement = React.forwardRef<any, ImageElementProps>((props, ref) => {
  const { imageData, handleToggle, deleteById } = props;
  const { show } = imageData;
  return (
    <Wrap ref={ref} {...props} show={show}>
      <MyText fontSize="1.25rem">Ttile and alt: {imageData.title}</MyText>
      <Toggle checked={show} onChange={handleToggle} />
      <ImgaeWrap>
        <Imgae src={imageData.image} alt={imageData.title} />
      </ImgaeWrap>
      <MyText
        onClick={() => {
          deleteById(imageData.id);
        }}
        style={{ color: "red", cursor: "pointer" }}
      >
        Delete item
      </MyText>
    </Wrap>
  );
});

export default ImageElement;
