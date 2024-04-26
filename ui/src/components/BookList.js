import React from 'react';
import BookCard from './BookCard';
import booksData from '../data/booksData';

const BookList = ({ category, search }) => {
    const filteredBooks = booksData.filter(book => {
        return (
            book.category.includes(category) &&
            book.title.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <div className="grid grid-cols-4 gap-5">
            {filteredBooks.length > 0 ?
                filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                ))
            :
                <div className="text-white">No <span className="font-bold">{category}</span> books found :(</div>
            }
        </div>
    );
};

export default BookList;
