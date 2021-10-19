import Header from "./containers/Header/Header";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Reset } from 'styled-reset'
import Global from "./styles/global"
function App() {
  return (
    <>
      <Reset />
      <Global/>
      <Header />
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </>
  );
}

export default App;
