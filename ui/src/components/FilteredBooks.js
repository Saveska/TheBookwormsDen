import React, {useState} from 'react';
import BookList from './BookList';
import CategoryBar from "./CategoryBar";
import ByNameFilter from "./ByNameFilter";

function FilteredBooks() {

    const [categoryFilter, setCategoryFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="p-4 filteredBookView">
            <div className="flex text-white">
                <div className="w-1/10">
                    <CategoryBar setCategoryFilter={setCategoryFilter} />
                </div>
                <div className="w-full h-full w-9/10 ms-10">
                    <ByNameFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <BookList category={categoryFilter} search={searchQuery} />
                    
                </div>
            </div>
            
        </div>
    );
}

export default FilteredBooks;
