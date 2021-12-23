import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
interface Option {
  name: string;
  url: string;
}

 //  ! TODO CHANGE TO CONST
const options: Option[] = [
  {
    name: "Categories",
    url: "/categories/",
  },
  {
    name: "Wine",
    url: "/categories/wine",
  },
  {
    name: "Beer",
    url: "/categories/beer",
  },

  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Our Favs",
    url: "/favs",
  },
  {
    name: "Random product",
    url: "/random",
  },
  {
    name: "Checkout",
    url: "/checkout",
  },

];

const CustomLink = styled(Link)`
  font-size: 0.875rem;
  text-align: center;
  color: #fff;
  margin: 5px 0;
  padding: 8px;
  white-space: nowrap;
  &:hover {
    outline: 1px solid #fff;
  }
`;
const ListContainer = styled.nav`
  padding: 0 0.5rem;
  height: 2.4375rem;
  min-width: 100%;
  line-height: 1em;
  width: fit-content;
  justify-content: space-around;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  background-color: #232f3e;

  overflow-x: auto;
  overflow-y: hidden;
  height: fit-content;
`;
const ListOfOptions = () => {
  return (
    <Wrapper>
      <ListContainer>
        {options.map((item, index) => {
          return (
            <CustomLink to={item.url} key={index}>
              {item.name}
            </CustomLink>
          );
        })}
      </ListContainer>
    </Wrapper>
  );
};

export default ListOfOptions;
