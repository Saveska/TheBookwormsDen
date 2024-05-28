import React, { useEffect } from "react";
import booksData from "../data/booksData.js";
import usersData from "../data/usersData.js";
import ordersData from "../data/ordersData.js";
import wishlistsData from "../data/wishlistsData.js";

const initializeLocalStorage = (key, data) => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

const Setup = () => {
  useEffect(() => {
    initializeLocalStorage("books", booksData);
    initializeLocalStorage("users", usersData);
    initializeLocalStorage("orders", ordersData);
    initializeLocalStorage("wishlists", wishlistsData);
  }, []);

  return null;
};

export default Setup;
