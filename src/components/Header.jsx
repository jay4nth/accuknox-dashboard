import React from "react";

import { Bell, Person } from "react-bootstrap-icons";
import "../App.css";

function Header() {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-3">
      <div className="flex items-center space-x-4 mr-3 md:mb-0">
        <div className="flex items-center gap-2 font-semibold">
          <div className="text-gray-500 flex gap-2 items-center">
            Home
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="greater-than"
                className="svg-inline--fa fa-greater-than fa-xs"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="text-indigo-700">Dashboard V2</div>
        </div>
      </div>

      <div className="flex justify-end items-center space-x-3 flex-auto">
        <input
          type="text"
          className="form-control w-full max-w-xs px-2 py-1 border border-gray-300 rounded-md"
          placeholder="Search anything..."
        />
        <select
          name="cluster"
          id="cluster"
          className="form-select w-32 px-2 py-1 border border-gray-300 rounded-md cursor-not-allowed"
        >
          <option value="cluster1">Cluster 1</option>
          <option value="cluster2">Cluster 2</option>
          <option value="cluster3">Cluster 3</option>
          <option value="cluster4">Cluster 4</option>
        </select>

        <div className="flex items-center">
          <Bell size={24} />
        </div>

        <div className="flex items-center">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=Ash"
            alt="Profile"
            className="w-8 h-8 rounded-full ml-2"
          />
          <div className="truncate ml-2">Username</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
