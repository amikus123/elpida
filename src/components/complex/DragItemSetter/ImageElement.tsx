import React from "react";
import Toggle from "react-toggle";
import styled from "styled-components";
import MyText from "../../core/Text/MyText";
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

const Wrap = styled.div<{show:boolean}>`
  padding: 1rem;
  background-color: ${props => (props.show ? `white` : `#C4C4C4`)};
  display: flex;
  transition: 0.5s background-color;
  flex-direction: column;
  align-items: center;
  >*{
    margin:0.25rem;
  }
`;
// we cam cut like half of the image
interface ImageElementProps {
  imageData: DraggableData;
  handleToggle: () => void;
}

// addinitional properties are due to Drag api
const ImageElement = React.forwardRef<any, ImageElementProps>((props, ref) => {
  const { imageData, handleToggle } = props;
  const { show } = imageData;
  return (
    <Wrap
      ref={ref}
      {...props}
      show={show}
      // style={{ backgroundColor: show ? "green" : "grey" }}
    >
      <MyText fontSize="1.25rem">Ttile and alt: {imageData.title}</MyText>
      <Toggle checked={show} onChange={handleToggle} />
      <ImgaeWrap>
        <Imgae src={imageData.image} alt={imageData.title} />
      </ImgaeWrap>
    </Wrap>
  );
});

export default ImageElement;
