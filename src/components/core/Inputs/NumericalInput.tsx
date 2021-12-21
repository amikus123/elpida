import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../styles/styleValues";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import MyText from "../Text/MyText";

const Wrap = styled.div`
  border: 1px solid ${COLORS.lightGrey};
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items:center;
`;
const LeftBox = styled.div`
  padding:  0.5rem;
  cursor: pointer;
  border-right: 1px solid ${COLORS.lightGrey};

`;
const RightBox = styled.div`
  padding: 0.5rem;
  cursor: pointer;

  border-left: 1px solid ${COLORS.lightGrey};
`;
const Input = styled.input`
width:3rem;
padding:0.5rem;
outline:none;
`;

interface NumericalInputProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
const NumericalInput = ({ count, setCount }: NumericalInputProps) => {
  const [errorText, setErrorText] = useState("");
  const [inputValue, setInputValue] = useState("1");

  const handleIncrementaction = () => {
    setCount(count + 1);
    setInputValue(String(count + 1));
  };
  const handleDecrementation = () => {
    if (count > 1) {
      setCount(count - 1);
      setInputValue(String(count - 1));
    } else {
      setErrorText("Number of items should be greater than 0");
    }
  };
  useEffect(() => {
    if (count < 1) {
      setInputValue("1");
      setCount(1);
    } else {
      setErrorText("");
    }
  }, [count, setCount]);
  return (
    <>
      <Wrap>
        <LeftBox onClick={handleDecrementation}>
          <AiOutlineMinus />
        </LeftBox>
        <Input
          value={inputValue}
          onChange={(e) => {
            const value = e.target.value;
            // eslint-disable-next-line use-isnan
            if (
              !isNaN(Number(value)) &&
              !(value.length > 0 && value[0] === "0")
            ) {
              setInputValue(value);
            } else {
              setErrorText("Number of items should be greater than 0");
            }
          }}
          onBlur={(e) => {
            const value = e.target.value;
            if (value === "") {
              setCount(1);
              setInputValue("1");
            } else if (!isNaN(Number(value))) {
              setCount(Number(value));
            } else {
              setErrorText("Number of items should be greater than 0");
            }
          }}
        />
        <RightBox onClick={handleIncrementaction}>
          <AiOutlinePlus />
        </RightBox>
      </Wrap>
      {errorText !== "" ? (
        <MyText presetColor="red"> {errorText} </MyText>
      ) : null}
    </>
  );
};

export default NumericalInput;
