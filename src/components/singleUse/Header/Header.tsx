import styled from "styled-components";
import Logo from "../../core/Logo/Logo";
import Cart from "./HeaderTabs/Cart";
import Deliver from "./HeaderTabs/Deliver";
import ListOfOptions from "./HeaderTabs/ListOfOptions";
import Login from "./HeaderTabs/Login";
import Returns from "./HeaderTabs/Returns";
import SearchBar from "./SearchBar/SearchBar";
import { SIZES } from "../../../styles/styleValues";

const HeaderElement = styled.header`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 100;
  background-color: #131921;
`;
const FirstRow = styled.div`
  padding: 0 1rem;
  width: 100vw;
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
  return (
    <HeaderElement>
      <FirstRow>
        <Logo />
        <Deliver />
        <DesktopSearchWrap>
          <SearchBar />
        </DesktopSearchWrap>

        <Login />
        <Returns />
        <Cart />
      </FirstRow>
      <MobileSearchWrap>
        <SearchBar />
      </MobileSearchWrap>
      <ListOfOptions />
    </HeaderElement>
  );
};

export default Header;
