import React, { useState } from "react";
import SingleBookView from "./SingleBookView";
import { AddToCartButton } from "./AddToCartButton";

const BookCard = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="cursor-pointer book" onClick={openModal}>
      <div className="bg-gray-100">
        <div className="p-5">
          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {book.title}
            </h5>
            <h6 className="text-xl font-semibold tracking-tight text-gray-500">
              {book.author}
            </h6>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {/* SVG Icons */}
            </div>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              ${book.price}
            </span>
            <AddToCartButton onClick={null} />
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
