import React from "react";
import Toggle from "react-toggle";
import styled from "styled-components";
import { DraggableData } from "./DragItemSetter";

const Imgae = styled.img`
  width: 500px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImgaeWrap = styled.div`
  width: 500px;
  height: 120px;
  position: relative;
  overflow: hidden;
`;

const Wrap = styled.div`
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// we cam cut like half of the image
interface ImageElementProps {
  imageData: DraggableData;
  handleToggle:()=>void
  
}

// addinitional properties are due to Drag api
const ImageElement = React.forwardRef<any, ImageElementProps>(
  (props, ref) => {
    const { imageData,handleToggle } = props
    const {show} = imageData
    return (
      <Wrap ref={ref}  {...props}>
        <p>{imageData.title}</p>
        <Toggle  checked={show}  onChange={handleToggle} />
        <ImgaeWrap>
          <Imgae src={imageData.image} alt={imageData.title} />
        </ImgaeWrap>
      </Wrap>
    );
  }
);

export default ImageElement;
