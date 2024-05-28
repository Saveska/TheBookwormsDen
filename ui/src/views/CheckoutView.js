import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import bags from "../images/bags.png";

export const CheckoutView = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  return (
    <div>
      <Navbar dynamicStyles="sticky top-0 z-10" />
      <div className="flex flex-col md:flex-row justify-around items-center p-4 md:p-8 mt-12">
        <div className="mb-10 mb-md:0">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-2xl mb-3">Checkout</h1>
              <p className="text-gray-500">Here are the items in your cart</p>
            </div>
            <ul className="max-w-md text-gray-500 space-y-1 list-inside">
              {cartItems.map((book) => {
                return (
                  <li className="flex items-center">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <div className="flex flex-row justify-between gap-1">
                      <div>
                        {book.title} ({book.author}) -
                      </div>
                      <div className="font-semibold">${book.price}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <hr />
            <h2 className="text-lg">
              Total: $
              {cartItems.reduce((sum, book) => {
                return sum + book.price;
              }, 0)}
            </h2>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 ${dynamicStyles}"
            >
              Complete checkout
            </button>
          </div>
        </div>
        <div>
          <img src={bags} alt="Flying" width="400" height="400" />
        </div>
      </div>
    </div>
  );
};
