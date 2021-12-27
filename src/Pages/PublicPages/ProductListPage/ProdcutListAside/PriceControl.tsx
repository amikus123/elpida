import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import styled from "styled-components";
import { NameWithCount } from "../tmpConst";
import ManualInput from "./ManualInput";

// conternt input to mnarks

const Wrap = styled.div`
// do smokething with it
width:300px;
padding:1rem;`;
export interface PriceControlProps {
  rawValues: NameWithCount[];
  propertyName: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void

}
export interface MarkData {
  res: Record<string, number>;
  max: number;
  min: number;
}

const getMarks = (rawValues: NameWithCount[]): MarkData => {
  const res = {};
  let max = -1;
  let min = 999999;
  rawValues.forEach((item) => {
    const value = Number(item.value);
    if (isNaN(value)) {
      throw new Error("should be nan");
    } else {
      res[item.value] = String(item.value);
      if (value > max) {
        max = value;
      }
      if (min > value) {
        min = value;
      }
    }
  });
  return { max, min, res };
};

const PriceControl = ({
  rawValues,
  propertyName,
  setFieldValue
}: PriceControlProps) => {
    const [markData, setMarkData] = useState<MarkData>(getMarks(rawValues));
  const [values, setValues] = useState([markData.min, markData.max]);
  useEffect(()=>{
    setFieldValue(propertyName,values)
    console.log("should set",values)
  },[ propertyName, setFieldValue, values])
  useEffect(()=>{
    setMarkData(getMarks(rawValues))
  },[rawValues])
  return (
    <Wrap>
      <Slider.Range
        onChange={(newValues) => {
          setValues(newValues);
          setFieldValue(propertyName,newValues)
        }}
        marks={{[markData.max]:markData.max,[markData.min]:markData.min}}
        step={1}
        value={values}
        max={markData.max}
        min={markData.min}
      />
        <ManualInput values={values}  markData={markData} setValues={setValues}/>
    </Wrap>
  );
};

export default PriceControl;
