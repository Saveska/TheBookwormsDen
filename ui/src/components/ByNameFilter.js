import React from "react";

const ByNameFilter = ({ searchQuery, setSearchQuery, dynamicStyles }) => {
  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <form className={`w-full ${dynamicStyles}`}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-gray-500 ms-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="outline-none block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 focus:ring-0 focus:border-pink-600 rounded-full"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Filter by name..."
          required
        />
      </div>
    </form>
  );
};

export default ByNameFilter;
