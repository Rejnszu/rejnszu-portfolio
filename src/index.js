import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalVariablesContextProvider from "./context/GlobalVariables";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalVariablesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalVariablesContextProvider>
);
