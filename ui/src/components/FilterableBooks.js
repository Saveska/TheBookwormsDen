import React, { useState } from "react";
import BookGrid from "./BookGrid";
import CategoryBar from "./CategoryBar";
import ByNameFilter from "./ByNameFilter";

function FilterableBooks({ dynamicStyles }) {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={`${dynamicStyles}`}>
      <div className="px-12 py-5">
        <ByNameFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          dynamicStyles=""
        />
        <p className="flex flex-row flex-nowrap items-center my-8">
          <span className="flex-grow block border-t border-gray-300"></span>
          <span className="flex-none block mx-8 leading-none font-medium text-gray-600">
            or by category
          </span>
          <span className="flex-grow block border-t border-gray-300"></span>
        </p>
        <CategoryBar setCategoryFilter={setCategoryFilter} />
      </div>
      <BookGrid
        category={categoryFilter}
        search={searchQuery}
        dynamicStyles="px-12 mt-5"
      />
    </div>
  );
}

export default FilterableBooks;
