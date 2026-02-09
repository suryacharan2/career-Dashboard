import React from "react";

const JobSearch = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Job Search</h2>
    <input
      type="text"
      placeholder="Search for jobs..."
      className="p-3 rounded border w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    />
  </div>
);

export default JobSearch;
