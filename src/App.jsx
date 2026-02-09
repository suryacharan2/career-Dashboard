import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Jobsearch from "./pages/Jobsearch";
import Stats from "./pages/Stats";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-6 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jobsearch" element={<JobSearch />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;




