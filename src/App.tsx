import React from "react";
import Header from "./containers/Header/Header";
import { Switch, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import Global from "./styles/global";
import Home from "./Pages/Home";
import Overlay from "./components/core/Overlay/Overlay";
import { ElementProvider } from "./containers/Header/context/ElementContext";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";
import { DataProvider } from "./containers/Header/context/DataContext";
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
