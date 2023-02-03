import styled from "styled-components";
import Logo from "../../core/Logo/Logo";
import Cart from "./HeaderTabs/Cart";
import ListOfOptions from "./HeaderTabs/ListOfOptions";
import Login from "./HeaderTabs/Login";
import Returns from "./HeaderTabs/Returns";
import SearchBar from "./SearchBar/SearchBar";
import { SIZES } from "../../../styles/styleValues";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";
import { capitalizeFirstLetter } from "../../../utils/stringFunctions";

const HeaderElement = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 100;
  background-color: #131921;
`;
const FirstRow = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > * {
    margin: 0.5rem;
  }
`;
const MobileSearchWrap = styled.div`
  flex: 1;
  visibility: visible;
  margin: 0.25rem 1rem;
  @media (min-width: ${SIZES.TABLET}) {
    visibility: hidden;
    display: none;
    height: 0;
  }
`;
const DesktopSearchWrap = styled.div`
  visibility: hidden;
  display: none;

  width: 0;
  @media (min-width: ${SIZES.TABLET}) {
    visibility: visible;
    display: block;

    flex: 1;
  }
`;
const Header = () => {
  const { contentData } = useContext(DataContext);
  const [options, setOptions] = useState<string[]>([]);
  useEffect(() => {
    setOptions(
      ["All", ...Object.keys(contentData.inventory)].map(capitalizeFirstLetter)
    );
  }, [contentData.inventory]);
  return (
    <HeaderElement>
      <FirstRow>
        <Logo />
        <DesktopSearchWrap>
          <SearchBar options={options} />
        </DesktopSearchWrap>

        <Login />
        <Returns />
        <Cart />
      </FirstRow>
      <MobileSearchWrap>
        <SearchBar options={options} />
      </MobileSearchWrap>
      <ListOfOptions />
    </HeaderElement>
  );
};

export default Header;
