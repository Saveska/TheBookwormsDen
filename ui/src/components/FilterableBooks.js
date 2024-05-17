import React, { useState } from "react";
import BookGrid from "./BookGrid";
import CategoryBar from "./CategoryBar";
import ByNameFilter from "./ByNameFilter";

function FilterableBooks({ dynamicStyles }) {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={`filteredBookView ${dynamicStyles}`}>
      <div className="flex text-white">
        <div className="w-1/10">
          <CategoryBar setCategoryFilter={setCategoryFilter} />
        </div>
        <div className="w-full h-full w-9/10 ms-10">
          <ByNameFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            dynamicStyles="mb-10"
          />
          <BookGrid category={categoryFilter} search={searchQuery} />
        </div>
      </div>
    </div>
  );
}

export default FilterableBooks;
