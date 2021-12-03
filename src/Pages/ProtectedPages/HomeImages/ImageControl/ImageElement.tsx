import React, { useState } from "react";
import Toggle from "react-toggle";
import styled from "styled-components";
import { ImageWithLink } from "../../../../types";

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
  imageData: ImageWithLink;
  active: boolean;
  
}

// const FancyButton = React.forwardRef<HTMLButtonElement, FancyButtonProps>(
//   ({ children, className = '', fooBar, ...buttonProps }, ref) => (
//       <button {...buttonProps} className={`fancy-button ${className}`} ref={ref}>
//           {children}
//           {fooBar}
//       </button>
//   ),
// );

const ImageElement = React.forwardRef<any, ImageElementProps>(
  (props, ref) => {
    const { imageData, active } = props
    const [selected, setSelected] = useState(false);
    const toggleSelected = () => setSelected(!selected);
    return (
      <Wrap ref={ref}  {...props}>
        <p>{imageData.title}</p>
        <Toggle defaultChecked={selected} onChange={toggleSelected} />
        <ImgaeWrap>
          <Imgae src={imageData.image} alt={imageData.title} />
        </ImgaeWrap>
      </Wrap>
    );
  }
);

export default ImageElement;
