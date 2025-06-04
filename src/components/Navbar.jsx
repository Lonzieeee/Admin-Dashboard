import React from 'react';
import profileImage from '../assets/profile.jpg'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>Admin</h2>
      </div>
      <div className="navbar-right">
        <img src={profileImage} alt="Profile" className="profile-img" />
      </div>
    </div>
  );
};

export default Navbar;
