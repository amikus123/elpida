import React, { useState } from "react";
import ImageAdder from "./ImageAdder/ImageAdder";
import ImageControl from "./ImageControl/ImageControl";
import styled from "styled-components";
import Test from "./Test";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HomeImages = () => {
  // fecth all possible images from db, each has a toggle to show them in db
  // add text to edit their links
  // include option to add new images

  // toggle to set if it visible
  // image to
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => setSelected(!selected);

  return (
    <Wrap>
      <Test />
      <ImageControl />
      <ImageAdder />
      <ImageControl />
    </Wrap>
  );
};

export default HomeImages;
