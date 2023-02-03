import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../../context/DataContext";
import { ElementContext } from "../../../context/ElementContext";
import { capitalizeFirstLetter } from "../../../utils/stringFunctions";
import MyText from "../Text/MyText";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  background-color: #fff;
  border-radius: 1rem;
  height: 80vh;
  overflow-y: scroll;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;
const ItemWrap = styled.div`
  border: 1px solid black;
  width: fit-content;
  cursor: pointer;
`;
const Image = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

const ItemModal = () => {
  const { reset } = useContext(ElementContext);
  const { contentData, editPair } = useContext(DataContext);

  return (
    <Wrapper>
      {Object.keys(contentData.inventory).map((name, index) => {
        return (
          <Wrap key={index}>
            <MyText fontSize="2rem" style={{ padding: "1rem" }}>
              {capitalizeFirstLetter(name)}
            </MyText>
            {contentData.inventory[name].map((item, index2) => {
              return (
                <ItemWrap
                  key={index2}
                  onClick={() => {
                    editPair(item);
                    reset();
                  }}
                >
                  <MyText>{item.title}</MyText>
                  <Image src={item.image} alt="alcohol" />
                </ItemWrap>
              );
            })}
          </Wrap>
        );
      })}
    </Wrapper>
  );
};

export default ItemModal;
