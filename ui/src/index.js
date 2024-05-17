// noinspection ES6UnusedImports

import React from "react";
import ReactDOM from "react-dom/client";

import styles from "./index.css";
import MainView from "./views/MainView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainView />
  </React.StrictMode>
);
