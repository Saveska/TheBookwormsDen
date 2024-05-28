import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartPopover, EmptyPopover, NoAuthPopover } from "./Popover";
import { Popover } from "react-tiny-popover";

const Navbar = ({ dynamicStyles }) => {
  const navigate = useNavigate();
  const [isWishlistPopoverOpen, setIsWishlistPopoverOpen] = useState(false);
  const [isCartPopoverOpen, setIsCartPopoverOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth")) || [];
    setLoggedIn(storedAuth[0].loggedIn);

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    window.addEventListener("storage", () => {
      // When local storage changes, dump the list to
      // the console.
      setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
    });
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem("auth", JSON.stringify([{ loggedIn: false }]));
  };

  return (
    <nav
      className={`bg-black text-white px-12 py-4 flex flex-row justify-between items-center ${dynamicStyles}`}
    >
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="me-2 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
        <button
          className="text-sm tracking-tight hover:underline"
          onClick={() => navigate("/")}
        >
          The Bookworm's Den
        </button>
      </div>
      <div className="flex flex-row justify-between gap-5">
        <Popover
          isOpen={isWishlistPopoverOpen}
          positions={["top", "bottom", "left", "right"]}
          align="center"
          padding={24}
          onClickOutside={() => setIsWishlistPopoverOpen(false)}
          content={({ position, childRect, popoverRect }) =>
            loggedIn ? (
              <EmptyPopover entityName="wishlist" />
            ) : (
              <NoAuthPopover entityName="wishlist" navigate={navigate} />
            )
          }
        >
          <button
            type="button"
            onClick={() => setIsWishlistPopoverOpen(!isWishlistPopoverOpen)}
            className="inline-flex items-center text-sm hover:underline"
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
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            Wishlist {loggedIn ? "(0)" : ""}
          </button>
        </Popover>
        <Popover
          isOpen={isCartPopoverOpen}
          positions={["top", "bottom", "left", "right"]}
          align="center"
          padding={24}
          onClickOutside={() => setIsCartPopoverOpen(false)}
          content={({ position, childRect, popoverRect }) =>
            loggedIn ? (
              cartItems.length === 0 ? (
                <EmptyPopover entityName="cart" />
              ) : (
                <CartPopover books={cartItems} navigate={navigate} />
              )
            ) : (
              <NoAuthPopover entityName="cart" navigate={navigate} />
            )
          }
        >
          <button
            type="button"
            onClick={() => setIsCartPopoverOpen(!isWishlistPopoverOpen)}
            className="inline-flex items-center text-sm hover:underline"
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
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            Cart {loggedIn ? `(${cartItems.length})` : ""}
          </button>
        </Popover>
        <button
          type="button"
          onClick={() => (loggedIn ? handleLogout() : navigate("/auth"))}
          className="inline-flex items-center text-sm hover:underline"
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
              d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
            />
          </svg>
          {loggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
