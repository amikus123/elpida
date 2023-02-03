import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "rc-slider/assets/index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { ElementProvider } from "./context/ElementContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ElementProvider>
        <UserProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </UserProvider>
      </ElementProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
