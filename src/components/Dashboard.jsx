import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "./styles/Dashboard.css";
import WidgetSidebar from "./WidgetSidebar";
import data from "../store/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [widgetSidebarVisible, setWidgetSidebarVisible] = useState(false);
  const [newWidget, setNewWidget] = useState({
    name: "",
    content: "",
    isVisible: true,
  });

  useEffect(() => {
    setCategories(data);
  }, []);

  const addWidget = (categoryId) => {
    setCurrentCategoryId(categoryId);
    setSidebarVisible(true);
  };

  const handleWidgetSubmit = () => {
    setCategories(
      categories.map((cat) =>
        cat.id === currentCategoryId
          ? { ...cat, widgets: [...cat.widgets, newWidget] }
          : cat
      )
    );
    setSidebarVisible(false);
    setNewWidget({ name: "", content: "", isVisible: true });
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              widgets: cat.widgets.map((widget) =>
                widget.id === widgetId
                  ? { ...widget, isVisible: false }
                  : widget
              ),
            }
          : cat
      )
    );
  };

  return (
    <div className="dashboard">
      <div class="flex flex-col md:flex-row justify-between items-center px-2 py-6 border-none">
        <h1 class="text-xl sm:text-2xl font-semibold md:mb-0">
          CNAPP Dashboard
        </h1>
        <div class="flex flex-wrap gap-2 justify-end w-full md:w-auto">
          <div
            class="flex flex-row bg-white text-gray px-4 py-2 border-gray-200 border-2 rounded-md justify-between gap-2 cursor-pointer"
            onClick={() => setWidgetSidebarVisible(true)}
          >
            {/* <button onClick={() => setWidgetSidebarVisible(true)}> */}
            <div class="font-semibold">Add Widgets</div>
            {/* </button> */}
            <div class="font-semibold">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div class="bg-white text-gray font-semibold px-4 py-2 border-gray-200 border-2 rounded-md cursor-not-allowed opacity-50">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrows-rotate"
              class="svg-inline--fa fa-arrows-rotate "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
              ></path>
            </svg>
          </div>
          <div class="bg-white text-gray font-semibold px-4 py-2 border-gray-200 border-2 rounded-md cursor-not-allowed opacity-50">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis-vertical"
              class="svg-inline--fa fa-ellipsis-vertical "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
            >
              <path
                fill="currentColor"
                d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
              ></path>
            </svg>
          </div>
          <div class="bg-white text-gray text-indigo-700 font-semibold px-2 py-2 border-indigo-300 border-2 rounded-md cursor-not-allowed gap-1 flex items-center justify-start opacity-50">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="clock"
              class="svg-inline--fa fa-clock fa-lg "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
              ></path>
            </svg>
            <div class="ml-1 h-full w-full border-r-2 border-indigo-500"></div>
            <select
              name="date-filter"
              id="time"
              class="cursor-not-allowed"
              disabled=""
            >
              <option value="last_2_days">Last 2 Days</option>
              <option value="last_week">Last Week</option>
              <option value="last_month">Last Month</option>
              <option value="last_year">Last Year</option>
            </select>
          </div>
        </div>
      </div>

      <div className="categories">
        {categories.map((category) => (
          <div key={category.id} className="category">
            <h2 class="p-2 text-1xl font-semibold">{category.name}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-3">
              {category.widgets.map(
                (widget, index) =>
                  widget.isVisible && (
                    <div
                      class="relative p-6 bg-white rounded-md shadow-md flex flex-col justify-between widget-spot"
                      key={widget.id}
                    >
                      <h3 class="text-lg font-semibold break-words">
                        {widget.name}
                      </h3>
                      <p class="text-gray-600 mt-2 break-words">
                        {widget.content}
                      </p>
                      <span
                        className="remove-icon"
                        onClick={() =>
                          handleRemoveWidget(category.id, widget.id)
                        }
                      >
                        &#10005;
                      </span>
                    </div>
                  )
              )}
              <div class="p-4 flex justify-center items-center bg-white text-sm rounded-md border-gray-300 text-gray-500 widget-spot">
                <div
                  onClick={() => addWidget(category.id)}
                  class="flex flex-row bg-white text-gray-700 px-4 py-2 rounded justify-between gap-2 cursor-pointer border-2 border-gray-200 rounded-md"
                >
                  <div class="font-semibold">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                  <div class="font-semibold">Add Widget</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sidebarVisible && (
        <Sidebar
          newWidget={newWidget}
          setNewWidget={setNewWidget}
          onSubmit={handleWidgetSubmit}
          onClose={() => setSidebarVisible(false)}
        />
      )}

      {widgetSidebarVisible && (
        <WidgetSidebar
          categories={categories}
          setCategories={setCategories}
          onClose={() => setWidgetSidebarVisible(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
