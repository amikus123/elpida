import React from 'react'
import styled from "styled-components";

const options = [
  "All Departments",
  "Audible Books & Originals",
  "Alexa Skills",
];

const Wrapper = styled.div`
  background-color: red;
`;

const Inner = styled.div`
  height: 100%;
  `;
const Select = styled.select`height: 100%;`;
const Option = styled.option``;

const SearchSelect = () => {
  return (
    <Wrapper>
      <Inner>
        <Select>
          {options.map((item, index) => {
            return (
              <Option key={index} value={item}>
                {item}
              </Option>
            );
          })}
        </Select>
      </Inner>
    </Wrapper>
  );
};
export default SearchSelect
