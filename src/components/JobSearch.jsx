import React from "react";
import JobSearch from "../components/JobSearch";


const JobSearch = () => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Search Jobs</h2>
      <input
        type="text"
        placeholder="Search by role or company..."
        className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
      />
    </div>
  );
};

export default JobSearch;


