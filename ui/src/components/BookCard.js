import React, { useState, useEffect } from "react";
import SingleBookView from "./SingleBookView";
import { AddToCartButton, AddToWishlistButton } from "./AddToButtons";

const BookCard = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("auth")) || [];
    setLoggedIn(storedAuth[0].loggedIn);
  }, []);

  const handleAddToCart = (book) => {
    if (loggedIn) {
      let updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      updatedCart.push(book);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <div className="book">
      <div className="bg-gray-50">
        <div className="p-5">
          <div onClick={openModal} className="hover:underline cursor-pointer">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {book.title}
            </h5>
            <h6 className="text-xl tracking-tight text-gray-500">
              {book.author}
            </h6>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {/* SVG Icons */}
            </div>
            <span className="text-xs">Avg. rating:</span>
            <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded ms-1">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl text-gray-900">${book.price}</span>
            <AddToWishlistButton onClick={null} />
            <AddToCartButton handleClick={() => handleAddToCart(book)} />
          </div>
        </div>
      </div>
      <SingleBookView
        bookId={book.id}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default BookCard;
