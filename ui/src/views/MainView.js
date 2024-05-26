import React from "react";
import Navbar from "../components/Navbar";
import FilterableBooks from "../components/FilterableBooks";

const MainView = () => {
  return (
    <div>
      <Navbar dynamicStyles="sticky top-0 z-10" />
      <FilterableBooks />
    </div>
  );
};

export default MainView;
