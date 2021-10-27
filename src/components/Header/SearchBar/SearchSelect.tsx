import React, { useState } from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";

const options = ["All", "Audible Books & Originals", "Alexa Skills"];

const Wrapper = styled.div`
  /* background-color: red; */
  z-index: 15;
  position: relative;
`;

const Inner = styled.div`
  height: 100%;
  position: relative;
  &:hover {
    & > div {
      background-color: #dadada;
    }
  }
  &:focus-within {
    & > div {
      box-shadow: 0 0 0 2px #f90, 0 0 0 3px rgba(255, 153, 0, 0.5);
    }
  }
`;
const Display = styled.div`
  background-color: #f3f3f3;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #cdcdcd;
  border-radius: 6px 0px 0px 6px;

  & > span {
    font-size: 0.75rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Select = styled.select`
  height: 50px;
  cursor: pointer;

  left: 1px;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;

  position: absolute;
  opacity: 0;
  top: 0;
`;
const Option = styled.option``;

const SearchSelect = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <Wrapper>
      <Inner>
        <Display>
          <span>
            {selected}
            <FaCaretDown />
          </span>
        </Display>
        <Select
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
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
export default SearchSelect;
