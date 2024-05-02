import React from 'react';
import Navbar from "../components/Navbar";
import FilteredBooks from "../components/FilteredBooks";

const MainView = () => {
    return (
        <div className="h-screen bg-gray-800">
            <Navbar />
            <hr className="h-px border-0 my-7 dark:bg-gray-700"/>
            <FilteredBooks />
        </div>
    );
};

export default MainView;
