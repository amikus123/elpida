import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TextLink } from "../../../../constans/types";
import { DataContext } from "../../../../context/DataContext";
import { ElementContext } from "../../../../context/ElementContext";
import { getMatchingSuggestions } from "../../../../utils/headerFunctions";
import Suggestions from "./Suggestions";

const Wrapper = styled.div`
  flex: 1;
  background-color: #fff;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.25rem;
  position: relative;
  z-index:20;
  &:focus-within {
    & > div {
      box-shadow: 0 0 0 2px #f90, 0 0 0 3px rgba(255, 153, 0, 0.5);
    }
    >#suggestions{
      visibility:visible;
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
  const { reset, setOverlay} = useContext(ElementContext);
  const { contentData,headerData,updateHeaderData } = useContext(DataContext);
  const [suggsetions, setSuggestions] = useState<TextLink[]>([
    {
      title: "No matches found!",
      link: "#",
    },
  ]);
  useEffect(() => {
    if (headerData.headerInput === "") {
      reset();
    } else {
      setOverlay(true);
    }
  }, [headerData.headerInput ]);
  useEffect(() => {
    setSuggestions(getMatchingSuggestions(headerData.headerInput, headerData.selectedCategory, contentData.inventory));
  }, [contentData.inventory,headerData.headerInput,headerData.selectedCategory]);
  return (
    <Wrapper>
      <Inner>
        <Input
          value={headerData.headerInput}
          onChange={(e) => {
            updateHeaderData(e.target.value);
          }}
          onClick={(e)=>{
            setOverlay(true)
          }}
        />
       <Suggestions suggsetions={suggsetions} />

        <Shadow></Shadow>
      </Inner>
    </Wrapper>
  );
};

export default SearchInput;
