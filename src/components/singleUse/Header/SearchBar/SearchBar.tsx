import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { DataContext } from "../../../../context/DataContext";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import SearchSelect from "./SearchSelect";

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
interface SearchBarProps{
  options:string[],
}
const SearchBar = ({options}:SearchBarProps) => {
  const history = useHistory()
  const {headerData} = useContext(DataContext)

  return (
    <Form onSubmit={(e)=>{
      history.replace(`/search/${headerData.selectedCategory}/${headerData.headerInput}`)

      e.preventDefault()
    }}>
      <SearchSelect  options={options} />
      <SearchInput  />
      <ButtonWrapper>
        <SearchButton />
      </ButtonWrapper>
    </Form>
  );
};

export default SearchBar;
