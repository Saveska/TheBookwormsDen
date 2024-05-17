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
    <div className={`flex items-center justify-center w-full ${dynamicStyles}`}>
      <div className="grid grid-cols-2 gap-3 w-fit">
        <div className="w-full h-full">
          <button
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? "opacity-50" : "hover:bg-gradient-to-bl"
            } px-4 py-2 mx-4 text-sm w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            onClick={prevPage}
          >
            Prev
          </button>
        </div>
        <div className="w-full h-full">
          <button
            disabled={!(indexOfLastBook < filteredBooks.length)}
            className={`${
              !(indexOfLastBook < filteredBooks.length)
                ? "opacity-50"
                : "hover:bg-gradient-to-bl"
            } w-full px-4 py-2 mx-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationButtons;
