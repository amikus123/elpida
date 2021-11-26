import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  background-color: #fff;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.25rem;
  &:focus-within {
    & > div {
      box-shadow: 0 0 0 2px #f90, 0 0 0 3px rgba(255, 153, 0, 0.5);
    }
  }
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  z-index: 10;
  position: relative;
  border: none;
`;
const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 6px;
  z-index: 0;
`;
const SearchInput = () => {
  return (
    <Wrapper>
      <Inner>
        <Input />
        <Shadow></Shadow>
      </Inner>
    </Wrapper>
  );
};

export default SearchInput;
