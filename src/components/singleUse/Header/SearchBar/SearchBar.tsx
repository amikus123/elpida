import React from "react";
import styled from "styled-components";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import SearchSelect from "./SearchSelect";

const Wrapper = styled.div`
  flex: 1;
  /* background-color: #ffffff7a; */
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 40px;
  border-radius: 6px;
  position: relative;

`;
const ButtonWrapper = styled.div`
  width: 2.8125rem;
  height: 40px;
`;

const SearchBar = () => {
  return (
    <Wrapper>
      <Form>
        <SearchSelect />
        <SearchInput />
        <ButtonWrapper>
          <SearchButton />
        </ButtonWrapper>
      </Form>
    </Wrapper>
  );
};

export default SearchBar;
