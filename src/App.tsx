import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Header from "./containers/Header/Header";
import { Switch, Route, useLocation } from "react-router-dom";
import { Reset } from "styled-reset";
import Global from "./styles/global";
import Home from "./Pages/Home";
import SignUpPage from "./Pages/SignUpPage";
import Overlay from "./components/core/Overlay/Overlay";
import { ElementProvider } from "./context/ElementContext";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";
import { DataProvider } from "./context/DataContext";
import LogInPage from "./Pages/LogInPage";
import { UserProvider } from "./context/UserContext";

function App() {
  const location = useLocation();

  return (
    <>
      <Reset />
      <ThemeProvider theme={lightTheme}>
        <UserProvider>
          <DataProvider>
            <ElementProvider>
              <Global />
              <Overlay />
              {location.pathname !== "/login" &&
              location.pathname !== "/signup" ? (
                <Header />
              ) : null}
              <Switch>
                <Route path="/login" component={LogInPage}></Route>
                <Route path="/signup" render={() => <SignUpPage />}></Route>
                <Route path="/" exact component={Home}></Route>
              </Switch>
            </ElementProvider>
          </DataProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
