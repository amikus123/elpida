import React, { useState } from "react";
import Toggle from "react-toggle";
import styled from "styled-components";

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
interface ImageControlProps {
    title:string,
    active:boolean,
}
const ImageControl = () => {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => setSelected(!selected);
  return (
    <Wrap>
      <p>title</p>
      <Toggle defaultChecked={selected} onChange={toggleSelected} />
      <ImgaeWrap>
        <Imgae src="/images/homeCarousel/christmas.jpg" alt="shiu" />
      </ImgaeWrap>
    </Wrap>
  );
};

export default ImageControl;
