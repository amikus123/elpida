import React from "react";
import { Field } from "formik";
import styled from "styled-components";
import MyText from "../../../../components/core/Text/MyText";
import { COLORS } from "../../../../styles/styleValues";
import {
  capitalizeFirstLetter,
  determineExtraSymbol,
} from "../../../../utils/stringFunctions";
import {  SidebarData } from "../tmpConst";
import { sortProperties } from "../../../../utils/filterOptions";
import PriceControl from "./PriceControl";
const Wrap = styled.div`
  padding: 0.5rem;
  border: 1px solid ${COLORS.grey};
`;
const CheckboxWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const InnerCheckboxWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > :last-child {
    padding-left: 0.5rem;
  }
`;

interface PropertyListProps {
  data: SidebarData;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
}
const PropertyList = ({ data ,setFieldValue}: PropertyListProps) => {
  const { title, propertyName, values } = data;
  // if ikey is prcie or alghohl we do tdifferent
  const shouldBeSlider = (key: string) => {
    if (key === "price" || key === "alcoholPercentage") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Wrap>
      <MyText>{title}</MyText>
      {shouldBeSlider(propertyName) ? (
        <PriceControl  setFieldValue={setFieldValue}rawValues={values}  propertyName={propertyName}  />

      ) : (
        <CheckboxWrap role="group" aria-labelledby="checkbox-group">
          {sortProperties(values).map((item, index) => {
            const { value, count } = item;
            return (
              <InnerCheckboxWrap key={index}>
                <Field
                  type="checkbox"
                  name={propertyName}
                  value={String(value)}
                  id={propertyName + index}
                />
                <MyText
                  element="label"
                  labelTarget={propertyName + index}
                  fontSize="1.25rem"
                >
                  {capitalizeFirstLetter(String(value))}
                  {determineExtraSymbol(propertyName)}
                  <MyText presetColor="grey" element="span" fontSize="0.875em">
                    ({count})
                  </MyText>
                </MyText>
              </InnerCheckboxWrap>
            );
          })}
        </CheckboxWrap>
      )}
    </Wrap>
  );
};

export default PropertyList;
