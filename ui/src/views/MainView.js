import React from "react";
import Navbar from "../components/Navbar";
import FilterableBooks from "../components/FilterableBooks";

const MainView = () => {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <hr className="h-px border-0 my-7 dark:bg-gray-700" />
      <FilterableBooks dynamicStyles="px-10" />
    </div>
  );
};

export default MainView;
