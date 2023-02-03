import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyText from "../../../../components/core/Text/MyText";
import { MarkData } from "./PriceControl";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
const InputWrap = styled.div`
  display: flex;
  width: fit-content;

  flex-direction: row;
  align-items: center;
  height: fit-content;
`;
const Input = styled.input`
  width: 3rem;
  padding: 0.5rem;
  outline: none;
`;
const Divider = styled.div`
  background-color: black;
  width: 20px;
  height: 3px;
`;
interface ManualInputProps {
  values: number[];
  markData: MarkData;
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
}
const ManualInput = ({ values, markData, setValues }: ManualInputProps) => {
  const [errorText, setErrorText] = useState("");
  const { max, min } = markData;
  const [inputValues, setInputValues] = useState(values);

  useEffect(() => {
    setInputValues(values);
    setErrorText("");
  }, [values]);

  useEffect(() => {
    const { max, min } = markData;
    setInputValues([min, max]);
    setErrorText("");
  }, [markData]);

  const checkIfInRange = (val: number) => {
    return val > max || val < min;
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = Number(e.target.value);
    // if values are in correct orderd, we set it
    let newValues = [];
    index === 0
      ? (newValues = [value, inputValues[1]])
      : (newValues = [inputValues[0], value]);

    setInputValues(newValues);

    if (checkIfInRange(value)) {
      setErrorText("Passed value is outside the range");
    } else if (newValues[0] <= newValues[1]) {
      setValues(newValues);
      setErrorText("");
    } else {
      setErrorText("Values are in wrong order");
    }
  };

  return (
    <Wrap>
      <InputWrap>
        <Input
          type="number"
          value={inputValues[0].toString()}
          onChange={(e) => {
            handleChange(e, 0);
          }}
        />
        <Divider />
        <Input
          type="number"
          value={inputValues[1].toString()}
          onChange={(e) => {
            handleChange(e, 1);
          }}
        />
      </InputWrap>
      {errorText !== "" ? (
        <MyText presetColor="red" style={{}}>
          {errorText}
        </MyText>
      ) : null}
    </Wrap>
  );
};

export default ManualInput;
