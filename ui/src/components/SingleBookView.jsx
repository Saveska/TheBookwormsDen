import React, { useEffect, useState } from "react";
import booksData from "../data/booksData";
import { AddToCartButton } from "./AddToButtons";

const SingleBookView = ({ bookId, isOpen, onClose }) => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const fetchData = async () => {
        try {
          const response = await new Promise((resolve) =>
            setTimeout(
              () =>
                resolve({
                  id: 1,
                  title: "Harry Potter",
                  author: "J.K. Rowling",
                  category: "Fiction",
                  price: 19.99, // added price for completion
                }),
              1000
            )
          );

          setBookData(response);
        } catch (error) {
          console.error("Error fetching book data:", error);
        }
      };

      fetchData();
    }
  }, [isOpen]);

  const findBookById = (id) => {
    return booksData.find((book) => book.id === id);
  };

  const renderBookDetails = () => {
    if (!bookData) {
      return (
        <div className="flex items-center justify-center w-full h-[50vh]">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-gray-200 animate-spin fill-pink-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    const book = findBookById(Number(bookId));

    if (!book) {
      return <div>Book not found.</div>;
    }

    return (
      <div className="relative max-w-2xl p-8 bg-white shadow-xl">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{book.title}</h2>
            <p className="mt-2 text-sm text-gray-600">by {book.author}</p>
          </div>
          <button
            className="text-gray-400 transition hover:text-gray-600"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-700">Category: {book.category}</p>
          <p className="text-sm text-gray-700">{book.description}</p>
          <p className="text-xl font-bold text-gray-900">${book.price}</p>
        </div>
        <AddToCartButton onClick={null} dynamicStyles="mt-5 w-full" />
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 close-modal"
      onClick={(e) => {
        onClose();
        e.stopPropagation();
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative z-50 w-full max-w-2xl mx-auto bg-white shadow-lg"
      >
        {renderBookDetails()}
      </div>
    </div>
  );
};

export default SingleBookView;
