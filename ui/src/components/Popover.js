import React from "react";
import padlock from "../images/padlock.png";
import cart from "../images/cart.png";
import wishlist from "../images/wishlist.png";

export function NoAuthPopover({ entityName, navigate }) {
  return (
    <div
      role="tooltip"
      className="popover-content inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm"
    >
      <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
        <h3 className="text-gray-900">{`You can't use the ${entityName} yet`}</h3>
      </div>
      <div className="flex flex-col items-center p-5 gap-2">
        <p>
          This feature requires you to{" "}
          <button
            className="hover:underline text-pink-400"
            onClick={() => navigate("/auth")}
          >
            login
          </button>{" "}
          first.
        </p>
        <div>
          <img alt="padlock" width="80" height="106" src={padlock}></img>
        </div>
      </div>
    </div>
  );
}

export function EmptyPopover({ entityName }) {
  return (
    <div
      role="tooltip"
      className="popover-content inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm"
    >
      <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
        <h3 className="text-gray-900">{`Your ${entityName} is empty`}</h3>
      </div>
      <div className="flex flex-col items-center p-5 gap-2">
        <p>Add items from the menu below</p>
        <div>
          <img
            alt={entityName}
            width="80"
            height="80"
            src={entityName === "cart" ? cart : wishlist}
          ></img>
        </div>
      </div>
    </div>
  );
}

export function CartPopover({ books, navigate }) {
  return (
    <div
      role="tooltip"
      className="popover-content inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm"
    >
      <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
        <h3 className="text-gray-900">{`Your have ${books.length} items in your cart`}</h3>
      </div>

      <div className="flex flex-col">
        <ul className="font-medium text-gray-900 bg-white">
          {books.map((book) => {
            return (
              <li
                className="w-full px-4 py-2 border-b border-gray-200"
                key={book.id}
              >
                <div className="flex flex-row justify-between">
                  <div>{book.title}</div>
                  <div>${book.price}</div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center items-center my-5">
          <button
            className="inline-flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5"
            type="button"
            onClick={() => navigate("/checkout")}
          >
            <svg
              className="w-5 h-5 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"
              />
            </svg>
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
