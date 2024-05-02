import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import booksData from "../data/booksData";
import PaginationButtons from "./Home/PaginationButtons";

const BookList = ({ category, search }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const booksPerPage = 9;
	const [filteredBooks, setFilteredBooks] = useState([]);

	useEffect(() => {
		const newFilteredBooks = booksData.filter((book) => {
			return (
				book.category.includes(category) &&
				book.title.toLowerCase().includes(search.toLowerCase())
			);
		});
		setFilteredBooks(newFilteredBooks);
		setCurrentPage(1);
	}, [category, search]);

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
		<div className='flex flex-col justify-between w-full '>
			<div className='grid h-full grid-cols-3 row-span-3 gap-5'>
				{currentBooks.length > 0 ? (
					currentBooks.map((book) => <BookCard key={book.id} book={book} />)
				) : (
					<div className='text-white'>
						No <span className='font-bold'>{category}</span> books found :(
					</div>
				)}
			</div>
			<div className='row-span-1'>
				<PaginationButtons
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					indexOfLastBook={indexOfLastBook}
					filteredBooks={filteredBooks}
					nextPage={nextPage}
					prevPage={prevPage}
				/>
			</div>
		</div>
	);
};

export default BookList;
