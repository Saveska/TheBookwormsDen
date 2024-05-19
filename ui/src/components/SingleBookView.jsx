import React, { useEffect, useState } from "react";
import booksData from "../data/booksData";

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
				<div className='flex items-center justify-center w-full h-[50vh]'>
					Loading book details...
				</div>
			);
		}

		const book = findBookById(Number(bookId));

		if (!book) {
			return <div>Book not found.</div>;
		}

		return (
			<div className='relative max-w-2xl p-8 bg-white border rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700'>
				<div className='flex items-start justify-between mb-4'>
					<div>
						<h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
							{book.title}
						</h2>
						<p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
							by {book.author}
						</p>
					</div>
					<button
						className='text-gray-400 transition hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100'
						onClick={onClose}
					>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>
				<div className='space-y-4'>
					<p className='text-sm text-gray-700 dark:text-gray-300'>
						Category: {book.category}
					</p>
					<p className='text-sm text-gray-700 dark:text-gray-300'>
						{book.description}
					</p>
					<p className='text-xl font-bold text-gray-900 dark:text-white'>
						${book.price}
					</p>
				</div>
				<button className='w-full py-2.5 mt-6 text-sm font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800'>
					Add to cart
				</button>
			</div>
		);
	};

	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 close-modal'
			onClick={(e) => {
				onClose();
				e.stopPropagation();
			}}
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className='relative z-50 w-full max-w-2xl mx-auto bg-white border rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700'
			>
				{renderBookDetails()}
			</div>
		</div>
	);
};

export default SingleBookView;
