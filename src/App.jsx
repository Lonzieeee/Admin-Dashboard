import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './index.css';
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// PAGE

import DashboardPage from "./pages/DashboardPage";
import Products from "./pages/Products";
import Users from "./pages/Users";

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
            <Route path="/" element = {<Login />} />
            <Route path="/dashboard" element={<DashboardPage />} />


          <Route path="/product-management" element={<Products />} />
          <Route path="/user-management" element={<Users />} />
           
          </Routes>



        </div>
      </div>
    </Router>
  );
};
export default App;