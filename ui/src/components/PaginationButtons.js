import React from "react";

const PaginationButtons = ({
  currentPage,
  setCurrentPage,
  indexOfLastBook,
  filteredBooks,
  nextPage,
  prevPage,
  dynamicStyles,
}) => {
  return (
    <div
      id="pagination-buttons"
      className={`flex items-center justify-center w-full ${dynamicStyles}`}
    >
      <div className="grid grid-cols-2 gap-3 w-fit">
        <div className="w-full h-full">
          <button
            disabled={currentPage === 1}
            className={`${
              currentPage === 1
                ? "bg-gray-800/50 backdrop-blur-md"
                : "bg-gray-800 hover:bg-gray-900"
            } inline-flex items-center text-white focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-5 py-2.5`}
            onClick={prevPage}
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
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
            Prev
          </button>
        </div>
        <div className="w-full h-full">
          <button
            disabled={!(indexOfLastBook < filteredBooks.length)}
            className={`${
              !(indexOfLastBook < filteredBooks.length)
                ? "bg-gray-800/50 backdrop-blur-md"
                : "bg-gray-800 hover:bg-gray-900"
            } inline-flex items-center text-white focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full px-5 py-2.5`}
            onClick={nextPage}
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationButtons;
