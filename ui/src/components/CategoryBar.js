import React, { useState } from "react";

const CategoryBar = ({ setCategoryFilter, dynamicStyles }) => {
  let categories = [
    "Drama",
    "Fiction",
    "Horror",
    "Non-fiction",
    "Sci-Fi",
    "Fantasy",
    "Mystery",
    "Thriller",
  ];

  const [activeCategory, setActiveCategory] = useState("");

  const handleClick = (category) => {
    setActiveCategory(category);
    setCategoryFilter(category);
  };

  return (
    <div className={`grid grid-cols-5 gap-2 ${dynamicStyles}`}>
      {categories.map((category) => (
        <div key={category}>
          <button
            type="button"
            onClick={() => handleClick(category)}
            className={
              category === activeCategory
                ? "w-full text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 hover:bg-gray-900 rounded-full px-3 py-2 text-sm "
                : "w-full text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 rounded-full px-3 py-2 text-sm"
            }
          >
            {category}
          </button>
        </div>
      ))}
      <div>
        <button
          type="button"
          onClick={() => handleClick("")}
          className={
            "" === activeCategory
              ? "w-full text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 hover:bg-gray-900 rounded-full px-3 py-2 text-sm"
              : "w-full text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 rounded-full px-3 py-2 text-sm"
          }
        >
          All categories
        </button>
      </div>
    </div>
  );
};

export default CategoryBar;
