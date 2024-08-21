import React from "react";
import "./styles/Sidebar.css";

const Sidebar = ({ newWidget, setNewWidget, onSubmit, onClose }) => {
  const isDisabled = !newWidget.name || !newWidget.content;
  return (
    <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50">
      <div class="bg-white w-200 h-full shadow-lg transition-transform transform translate-x-0">
        <div
          class="flex p-3 bg-indigo-700 justify-between items-center"
          // className="sidebar-header"
        >
          <h2 class="font-semibold text-white">Add New Widget</h2>
          <div onClick={onClose} class="cursor-pointer text-lg">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="xmark"
              class="svg-inline--fa fa-xmark text-white"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              ></path>
            </svg>
          </div>
        </div>

        <div class="p-6">
          <input
            type="text"
            className="border p-2 rounded mb-4 w-full"
            placeholder="Widget Name"
            value={newWidget.name}
            onChange={(e) =>
              setNewWidget({
                ...newWidget,
                name: e.target.value,
                id: e.target.value,
              })
            }
          />
          <textarea
            placeholder="Widget Text"
            class="border p-2 rounded mb-4 w-full"
            value={newWidget.content}
            onChange={(e) =>
              setNewWidget({
                ...newWidget,
                content: e.target.value,
                isVisible: true,
              })
            }
          />
        </div>
        <div class="flex mt-6 bottom-4 fixed gap-4 align-center right-6">
          <button
            class="bg-transparent bg-white-500 text-indigo-700 font-semibold py-2 px-4 border border-indigo-700 rounded-md shadow-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            disabled={isDisabled}
            className={`${
              isDisabled
                ? "opacity-50 cursor-not-allowed  bg-indigo-700 font-semibold text-white py-2 px-4 border border-indigo-500 rounded-md"
                : "cursor-pointer  bg-indigo-700 font-semibold text-white py-2 px-4 border border-indigo-500 rounded-md"
            }cursor-pointer  bg-indigo-700 font-semibold text-white py-2 px-4 border border-indigo-500 rounded-md `}
          >
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
