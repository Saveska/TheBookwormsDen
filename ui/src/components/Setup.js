import React, { useEffect } from "react";
import booksData from "../data/booksData.js";
import usersData from "../data/usersData.js";
import ordersData from "../data/ordersData.js";
import wishlistsData from "../data/wishlistsData.js";
import authData from "../data/authData.js";

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
    initializeLocalStorage("auth", authData);
    initializeLocalStorage("cart", []);
  }, []);

  return null;
};

export default Setup;
