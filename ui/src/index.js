// noinspection ES6UnusedImports

import React from 'react';
import ReactDOM from 'react-dom/client';
import FilteredBooks from './components/FilteredBooks';
import Navbar from "./components/Navbar";

import styles from "./index.css"
import CategoryBar from "./components/CategoryBar";
import MainView from "./views/MainView";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MainView />
  </React.StrictMode>
);