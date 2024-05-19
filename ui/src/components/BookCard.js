import React, { useState } from "react";
import SingleBookView from "./SingleBookView";

const BookCard = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="cursor-pointer book" onClick={openModal}>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 dark:hover:border-white">
        <div className="p-5">
          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {book.title}
            </h5>
            <h6 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-400">
              {book.author}
            </h6>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {/* SVG Icons */}
            </div>
            <span className="ms-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${book.price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
      <SingleBookView bookId={book.id} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default BookCard;
