import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './index.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// PAGE

import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/*Sidebar */}
        <Sidebar />
        <div className="content-area">
          { /*Top Navbar*/ }
          <Navbar />

          <Routes>
            <Route path="/" element={<DashboardPage />} />
           
          </Routes>



        </div>
      </div>
    </Router>
  );
};
export default App;