import React from "react";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">Admin</div>
            <ul className="nav-links">
                <li>
                    <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="user-management">User Management</Link>
                    </li>
                    <li>
                        <Link to="/product-management">Product Management</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/analytics">Analytics</Link>
                    </li>
            </ul>
        </div>
    );
};
export default Sidebar;