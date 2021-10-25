import Header from "./containers/Header/Header";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import Global from "./styles/global";
import Home from "./Pages/Home";
import Overlay from "./components/core/Overlay/Overlay";
import { OverlayProvider } from "./context/OverlayContext"


function App() {

  return (
    <>
      <Reset />
      <Global />
      <OverlayProvider>
        <Overlay />
        <Header />
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </OverlayProvider>
    </>
  );
}

export default App;
