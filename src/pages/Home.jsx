import React from "react";
import DashboardCard from "../components/DashboardCard.jsx";


const Home = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <DashboardCard title="Jobs Applied" value={120} icon="📝" />
    <DashboardCard title="Interviews" value={15} icon="💼" />
    <DashboardCard title="Offers" value={5} icon="🎉" />
  </div>
);

export default Home;


