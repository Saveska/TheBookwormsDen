import React, {useState} from 'react';

const CategoryBar = ({ setCategoryFilter }) => {
    let categories = ['Drama', 'Fiction', 'Horror', 'Non-fiction', 'Sci-Fi', 'Fantasy', 'Mystery', 'Thriller']

    const [activeCategory, setActiveCategory] = useState('');

    const handleClick = (category) => {
        setActiveCategory(category);
        setCategoryFilter(category);
    };

    return (
        <div>
            <ul>
                {categories.map(category => (
                    <li key={category}>
                        <button type="button"
                                onClick={() => handleClick(category)}
                                className={category === activeCategory ?
                                    "w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" :
                                    "w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}>
                            {category}
                        </button>
                    </li>
                ))}
                <li>
                    <button type="button"
                            onClick={() => handleClick('')}
                            className={'' === activeCategory ?
                                "w-full text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" :
                                "category-button w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}>
                        All categories
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default CategoryBar;
