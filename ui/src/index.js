import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./index.css";
import MainView from "./views/MainView";
import AuthView from "./views/AuthView";
import ManagementView from "./views/ManagementView";

import Setup from "./components/Setup";
import { CheckoutView } from "./views/CheckoutView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Setup />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/auth" element={<AuthView />} />
        <Route path="/management" element={<ManagementView />} />
        <Route path="/checkout" element={<CheckoutView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
