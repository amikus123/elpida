import { Login } from "@mui/icons-material";
import styled from "styled-components";
import Logo from "../../core/Logo/Logo";
import Cart from "./HeaderTabs/Cart";
import Deliver from "./HeaderTabs/Deliver";
import ListOfOptions from "./HeaderTabs/ListOfOptions";
import Returns from "./HeaderTabs/Returns";
import SearchBar from "./SearchBar/SearchBar";


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
  padding:0 1rem;
  width: 100vw;
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