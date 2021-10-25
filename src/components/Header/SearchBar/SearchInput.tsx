import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
  background-color: blue;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
`;

const SearchInput = () => {
  return (
    <Wrapper>
      <Inner>
        <Input />
      </Inner>
    </Wrapper>
  );
};

export default SearchInput;
