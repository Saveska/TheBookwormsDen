import React from 'react';
import Navbar from "../components/Navbar";
import FilteredBooks from "../components/FilteredBooks";

const MainView = () => {
    return (
        <div className="bg-gray-800 h-screen">
            <Navbar />
            <hr className="h-px my-7 border-0 dark:bg-gray-700"/>
            <FilteredBooks />
        </div>
    );
};

export default MainView;
