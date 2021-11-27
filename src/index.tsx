import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { ElementProvider } from "./context/ElementContext";
import { UserProvider } from "./context/UserContext";
import { DashboardProvider } from "./context/DashboardContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <DataProvider>
          <DashboardProvider>
            <ElementProvider>
              <App />
            </ElementProvider>
          </DashboardProvider>
        </DataProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
