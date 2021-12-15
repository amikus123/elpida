import React from "react";
import { Field } from "formik";
import styled from "styled-components";
import MyText from "../../../../components/core/Text/MyText";
import { COLORS } from "../../../../styles/styleValues";
import { capitalizeFirstLetter } from "../../../../utils/stringFunctions";
interface PropertyListProps {
  data: any;
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
  return (
    <Wrap>
      <MyText>{title}</MyText>
      <CheckboxWrap role="group" aria-labelledby="checkbox-group">
        {values.map((item, index) => {
          const {value,count} = item
          return (
            <InnerCheckboxWrap key={index}>
              <Field
                type="checkbox"
                name={propertyName}
                value={String(value)}
                id={propertyName + index}
              />
              <MyText element="label" labelTarget={propertyName + index} fontSize="1.25rem">
                {value}{" "}<MyText presetColor="grey" element="span" fontSize="0.875em">({count})</MyText>
              </MyText>
            </InnerCheckboxWrap>
          );
        })}
      </CheckboxWrap>
    </Wrap>
  );
};

export default PropertyList;
