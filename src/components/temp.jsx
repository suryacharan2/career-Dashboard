import React from "react";
import CountUp from "react-countup";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow flex items-center gap-4 animate-fadeIn">
      <div>{icon}</div>
      <div>
        <p className="text-gray-500 dark:text-gray-300">{title}</p>
        <CountUp end={value} duration={2} className="text-2xl font-bold text-gray-900 dark:text-white"/>
      </div>
    </div>
  );
};

export default DashboardCard;



