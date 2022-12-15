import React from "react";

const List = () => {
  return (
    <div>
      <div class="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 rounded-full text-green-600 bg-gray-100  border-gray-300 focus:ring-green-500   "
        />
        <label
          for="default-checkbox"
          class="ml-2 text-sm font-medium hover:text-blue-500 text-gray-900 transition-all  "
        >
          New List Item
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 rounded-full text-green-600 bg-gray-100  border-gray-300 focus:ring-green-500  focus:ring-2 "
        />
        <label
          for="default-checkbox"
          class="ml-2 text-sm font-medium hover:text-blue-500 text-gray-900 transition-all  "
        >
          New List Item
        </label>
      </div>
      <div class="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 rounded-full text-green-600 bg-gray-100  border-gray-300 focus:ring-green-500  focus:ring-2 "
        />
        <label
          for="default-checkbox"
          class="ml-2 text-sm font-medium hover:text-blue-500 text-gray-900 transition-all  "
        >
          New List Item
        </label>
      </div>
    </div>
  );
};

export default List;
