import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function Sidebar({ children, title }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <aside>
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center mb-10 border-b">
            <span
              className={`overflow-hidden text-gray-600 text-sm ${
                expanded ? "w-32" : "w-0"
              }`}
            >
              {title}
            </span>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 text-gray-700 hover:text-gray-400"
            >
              {expanded ? (
                <svg
                  className="w-6 h-6"
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
                    d="m17 16-4-4 4-4m-6 8-4-4 4-4"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
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
                    d="m7 16 4-4-4-4m6 8 4-4-4-4"
                  />
                </svg>
              )}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert, onClick }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      onClick={onClick}
      className={`relative flex items-center py-2 px-3 my-1 cursor-pointer transition-colors group z-10 ${
        active
          ? "bg-gradient-to-tr from-pink-200 to-pink-100 text-pink-800"
          : "hover:bg-pink-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 bg-pink-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`absolute left-full px-2 py-1 ml-6 bg-pink-100 text-pink-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
