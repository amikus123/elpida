import React from "react";
import ImageAdder from "./ImageAdder/ImageAdder";
import ImageControl from "./ImageControl/ImageControl";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HomeImages = () => {
  // fecth all possible images from db, each has a toggle to show them in db
  // add text to edit their links
  // include option to add new images
  return (
    <Wrap>
      <ImageControl />
      <ImageAdder />
    </Wrap>
  );
};

export default HomeImages;
