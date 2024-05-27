import React from "react";
import padlock from "../images/padlock.png";

export function NoAuthPopover({ entityName, navigate }) {
  return (
    <div
      role="tooltip"
      className="popover-content inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm"
    >
      <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg">
        <h3 className="text-gray-900">{`You can't use the ${entityName} yet`}</h3>
      </div>
      <div className="flex flex-col items-center p-5 gap-2">
        <p>
          This feature requires you to{" "}
          <button
            className="hover:underline text-pink-400"
            onClick={() => navigate("/auth")}
          >
            login
          </button>{" "}
          first.
        </p>
        <div>
          <img alt="padlock" width="80" height="106" src={padlock}></img>
        </div>
      </div>
    </div>
  );
}
