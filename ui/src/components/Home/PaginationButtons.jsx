import React from "react";

const PaginationButtons = ({
	currentPage,
	setCurrentPage,
	indexOfLastBook,
	filteredBooks,
	nextPage,
	prevPage,
}) => {
	return (
		<div className='flex items-center justify-center w-full mt-10'>
			<div className='grid grid-cols-2 gap-3 w-fit'>
				<div className='w-full h-full'>
					<button
						className={`${
							currentPage === 1 ? "hidden" : ""
						} px-4 py-2 mx-4 text-sm w-full font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
						onClick={prevPage}
					>
						Prev
					</button>
				</div>
				<div className='w-full h-full'>
					<button
						className={`${
							!(indexOfLastBook < filteredBooks.length) ? "hidden" : ""
						} w-full px-4 py-2 mx-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
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
