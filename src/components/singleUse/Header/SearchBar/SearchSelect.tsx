import React, { useContext } from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import { DataContext } from "../../../../context/DataContext";

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
  border-right: 1px solid ${(props) => props.theme.borderColor};
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

  left: 2px;
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;

  position: absolute;
  opacity: 0;
  top: -8px;
`;
const Option = styled.option``;
interface SearchSelectProps {
  options: string[];
}
const SearchSelect = ({ options }: SearchSelectProps) => {
  const { headerData, updateHeaderData } = useContext(DataContext);

  return (
    <Wrapper>
      <Inner>
        <Display>
          <span>
            {headerData.selectedCategory}
            <FaCaretDown />
          </span>
        </Display>
        <Select
          onChange={(e) => {
            updateHeaderData(e.target.value, "category");
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
