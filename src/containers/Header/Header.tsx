import React from "react";
import Cart from "../../components/Header/Cart";
import Deliver from "../../components/Header/Deliver";
import ListOfOptions from "../../components/Header/ListOfOptions";
import Returns from "../../components/Header/Returns";
import Logo from "../../components/core/Logo/Logo";
import styled from "styled-components";
import SearchBar from "../../components/Header/SearchBar/SearchBar";
import Login from "../../components/Header/Login";

const HeaderElement = styled.header`
  display: flex;
  width: 100vw;

  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 100;
`;
const FirstRow = styled.div`
  background-color: #131921;
  width:100%;
  padding:0 1rem;
  height: 64px;
  display: flex;
  align-items: center;
  &>*{
    margin:0.5rem;
}
`;
const Header = () => {
  return (
    <HeaderElement>
      <FirstRow>
        <Logo />
        <Deliver />
        <SearchBar />
        <Login />
        <Returns />
        <Cart />
      </FirstRow>
      <ListOfOptions />
    </HeaderElement>
  );
};

export default Header;
