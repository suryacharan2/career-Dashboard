import React from "react";
import { useTheme } from "../ThemeContext.jsx";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center bg-white dark:bg-gray-900 p-4 shadow">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">Career Dashboard</h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;




