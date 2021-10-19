import React from "react";
import Cart from "../../components/Header/Cart";
import Deliver from "../../components/Header/Deliver";
import ListOfOptions from "../../components/Header/ListOfOptions";
import Login from "../../components/Header/Login";
import Returns from "../../components/Header/Returns";
import SearchBar from "../../components/Header/SearchBar";
import Logo from "../../components/Logo/Logo";
import styled from "styled-components";

const HeaderElement = styled.header`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
`;
const FirstRow = styled.div`
  background-color: #131921;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
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
