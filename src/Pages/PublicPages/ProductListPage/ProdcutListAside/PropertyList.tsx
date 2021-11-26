import React from "react";
import { Field } from "formik";
import styled from "styled-components";
import { Filter } from "../tmpConst";
import MyText from "../../../../components/core/Text/MyText";
import { COLORS } from "../../../../styles/styleValues";
interface PropertyListProps {
  data: Filter;
}
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

const PropertyList = ({ data }: PropertyListProps) => {
  const { title, propertyName, values } = data;
  // TODO show how many items are in each category
  return (
    <Wrap>
      <MyText>{title}</MyText>
      <CheckboxWrap role="group" aria-labelledby="checkbox-group">
        {values.map((item, index) => {
          return (
            <InnerCheckboxWrap key={index}>
              <Field
                type="checkbox"
                name={propertyName}
                value={item}
                id={propertyName + index}
              />
              <MyText element="label" labelTarget={propertyName + index}>
                {item}
              </MyText>
            </InnerCheckboxWrap>
          );
        })}
      </CheckboxWrap>
    </Wrap>
  );
};

export default PropertyList;
