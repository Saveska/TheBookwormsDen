import React, {useState} from 'react';
import BookList from './BookList';
import CategoryBar from "./CategoryBar";
import ByNameFilter from "./ByNameFilter";

function FilteredBooks() {

    const [categoryFilter, setCategoryFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="filteredBookView p-4">
            <div className="flex text-white">
                <div className="w-1/10">
                    <CategoryBar setCategoryFilter={setCategoryFilter} />
                </div>
                <div className="w-9/10 ms-10 w-full">
                    <ByNameFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <BookList category={categoryFilter} search={searchQuery} />
                </div>
            </div>
        </div>
    );
}

export default FilteredBooks;
