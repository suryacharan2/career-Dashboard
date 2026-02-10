import React from "react";
import RecentActivity from "../components/RecentActivity";

const RecentActivity = () => {
  const activities = [
    "Applied for Backend Developer",
    "Completed React tutorial",
    "Updated Resume"
  ];

  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="font-bold mb-2">Recent Activity</h3>
      <ul className="list-disc list-inside space-y-1">
        {activities.map((act, idx) => (
          <li key={idx}>{act}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;

