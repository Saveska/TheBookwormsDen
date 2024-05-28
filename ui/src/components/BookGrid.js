import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import PaginationButtons from "./PaginationButtons";

const BookGrid = ({ category, search, dynamicStyles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 18;
  const [booksData, setBooksData] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showPagination, setShowPagination] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const storedBooksData = JSON.parse(localStorage.getItem("books")) || [];
    setBooksData(storedBooksData);
  }, []);

  useEffect(() => {
    const newFilteredBooks = booksData.filter((book) => {
      return (
        book.category.includes(category) &&
        book.title.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredBooks(newFilteredBooks);
    setCurrentPage(1);
  }, [category, search, booksData]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowPagination(true);
      } else {
        setShowPagination(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className={`flex flex-col justify-between ${dynamicStyles}`}>
      <div className="grid grid-cols-3 row-span-3 gap-10">
        {currentBooks.length > 0 ? (
          currentBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <div>
            No <span className="font-bold">{category}</span> books found :(
          </div>
        )}
      </div>
      {showPagination && (
        <PaginationButtons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          indexOfLastBook={indexOfLastBook}
          filteredBooks={filteredBooks}
          nextPage={nextPage}
          prevPage={prevPage}
          dynamicStyles="my-10 sticky bottom-10 fadeIn"
        />
      )}
    </div>
  );
};

export default BookGrid;
