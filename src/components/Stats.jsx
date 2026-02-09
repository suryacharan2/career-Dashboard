import React from "react";

const Stats = () => {
  const statsData = [
    { title: "Total Users", value: 123 },
    { title: "Active Jobs", value: 45 },
    { title: "Applications", value: 67 },
    { title: "Interviews Scheduled", value: 12 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {statsData.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-xl p-6 text-center transform transition duration-500 hover:scale-105 animate-fadeIn"
          style={{ animationDelay: `${idx * 200}ms`, animationFillMode: "both" }}
        >
          <h2 className="text-2xl font-bold text-gray-800">{stat.value}</h2>
          <p className="text-gray-500 mt-2">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;


