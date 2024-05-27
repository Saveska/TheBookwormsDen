import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./index.css";
import MainView from "./views/MainView";
import AuthView from "./views/AuthView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/auth" element={<AuthView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
