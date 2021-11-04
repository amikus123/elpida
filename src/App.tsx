import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Header from "./containers/Header/Header";
import { Switch, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import Global from "./styles/global";
import Home from "./Pages/Home";
import Overlay from "./components/core/Overlay/Overlay";
import { ElementProvider } from "./context/ElementContext";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <>
      <Reset />
      <ThemeProvider theme={lightTheme}>
        <DataProvider>
          <ElementProvider>
            <Global />
            <Overlay />
            <Header />
            <Switch>
              <Route path="/" component={Home}></Route>
            </Switch>
          </ElementProvider>
        </DataProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
