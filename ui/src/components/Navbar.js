import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ dynamicStyles }) => {
  const navigate = useNavigate();

  return (
    <nav
      className={`bg-black text-white px-12 py-4 flex flex-row justify-between items-center ${dynamicStyles}`}
    >
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="me-2 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
        <button
          className="text-sm tracking-tight hover:underline"
          onClick={() => navigate("/")}
        >
          The Bookworm's Den
        </button>
      </div>
      <button
        type="button"
        onClick={() => navigate("/auth")}
        className="text-sm hover:underline"
      >
        <svg
          className="inline-flex items-center w-5 h-5 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
          />
        </svg>
        Login
      </button>
    </nav>
  );
};

export default Navbar;
