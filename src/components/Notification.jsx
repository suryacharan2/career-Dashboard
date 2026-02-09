import React from "react";

const Notifications = () => {
  const messages = [
    "Your resume was viewed 3 times today",
    "New job posting: Frontend Developer",
    "Interview scheduled with Google"
  ];

  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="font-bold mb-2">Notifications</h3>
      <ul className="list-disc list-inside space-y-1">
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;

