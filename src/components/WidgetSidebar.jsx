import React, { useState } from "react";
import "./styles/WidgetSidebar.css";

const WidgetSidebar = ({ categories, setCategories, onClose }) => {
  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.keyName || ""
  );
  const [selectedWidgets, setSelectedWidgets] = useState(() => {
    const initialSelections = {};
    categories.forEach((category) => {
      initialSelections[category.id] = category.widgets.reduce(
        (acc, widget) => {
          acc[widget.id] = widget.isVisible;
          return acc;
        },
        {}
      );
    });
    return initialSelections;
  });

  const handleToggleWidget = (categoryId, widgetId) => {
    setSelectedWidgets((prev) => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [widgetId]: !prev[categoryId][widgetId],
      },
    }));
  };

  const handleSubmit = () => {
    setCategories((prevCategories) =>
      prevCategories.map((category) => {
        const updatedWidgets = category.widgets.map((widget) => ({
          ...widget,
          isVisible:
            selectedWidgets[category.id]?.[widget.id] ?? widget.isVisible,
        }));

        return {
          ...category,
          widgets: updatedWidgets,
        };
      })
    );

    onClose();
  };

  return (
    <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end z-50">
      <div class="bg-white w-200 h-full shadow-lg transition-transform transform translate-x-0">
        <div class="flex p-3 bg-indigo-700 justify-between items-center">
          <h2 class="font-semibold text-white">Manage Widgets</h2>
          <button onClick={onClose} className="close-sidebar">
            &times;
          </button>
        </div>

        <h3 class="px-6 flex justify-between items-center my-4 font-medium">
          Personalise your dashboard by adding the following widgets
        </h3>
        <div className="flex px-6 space-x-3 mb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`tab-button text-gray-700 ${
                activeCategory === category.keyName ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.keyName)}
            >
              {category.keyName}
            </button>
          ))}
        </div>

        <div className="widget-list px-6">
          {categories
            .find((cat) => cat.keyName === activeCategory)
            ?.widgets.map((widget) => (
              <div key={widget.id} class="p-2 m-2 border-2 rounded ">
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    class="accent-indigo-700"
                    checked={
                      selectedWidgets[
                        categories.find((cat) => cat.keyName === activeCategory)
                          .id
                      ]?.[widget.id] || false
                    }
                    onChange={() =>
                      handleToggleWidget(
                        categories.find((cat) => cat.keyName === activeCategory)
                          .id,
                        widget.id
                      )
                    }
                  />
                  <span>{widget.name}</span>
                </label>
              </div>
            ))}
        </div>

        <div class="flex mt-6 bottom-4 fixed gap-4 align-center right-6">
          <button
            class="bg-transparent bg-white-500 text-indigo-700 font-semibold py-2 px-4 border border-indigo-500 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            class="cursor-pointer  bg-indigo-700 font-semibold text-white py-2 px-4 border border-indigo-500 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidgetSidebar;
