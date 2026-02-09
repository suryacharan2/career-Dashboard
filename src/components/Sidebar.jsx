import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-200 dark:bg-gray-800 min-h-screen p-6 flex flex-col gap-4">
      <Link className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded" to="/">Home</Link>
      <Link className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded" to="/jobsearch">Job Search</Link>
      <Link className="hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded" to="/stats">Stats</Link>
    </div>
  );
};

export default Sidebar;




