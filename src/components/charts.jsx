import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export function LineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Applications",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.4,
      },
    ],
  };

  return <Line data={data} />;
}

export function BarChart() {
  const data = {
    labels: ["Jobs Applied", "Interviews", "Offers"],
    datasets: [
      {
        label: "Count",
        data: [12, 3, 1],
        backgroundColor: ["#3b82f6", "#f59e0b", "#10b981"],
      },
    ],
  };

  return <Bar data={data} />;
}
