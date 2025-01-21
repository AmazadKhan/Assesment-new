import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import the CSS file for styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Amazad Dashboard</h2>
      </div>
      <ul className="sidebar-menu">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="" />
        <li>
          <Link to="/" className="sidebar-link">Amazad Dashboard</Link>
        </li>
        <li>
          <Link to="/" className="sidebar-link">Manage Customers</Link>
        </li>
        <li>
          <Link to="/add-food-menu" className="sidebar-link">Add Food Menu</Link>
        </li>
        <li>
          <Link to="/add-food" className="sidebar-link">Add Food</Link>
        </li>
        {/* <li>
          <Link to="/" className="sidebar-link">Add Events</Link>
        </li>
        <li>
          <Link to="/" className="sidebar-link">Add Chefs</Link>
        </li>
        <li>
          <Link to="/" className="sidebar-link">Manage Contacts</Link>
        </li>
        <li>
          <Link to="/" className="sidebar-link">Manage Reviews</Link>
        </li> */}
      </ul>
      <button className="logout-button">Logout</button>
    </div>
  );
};

export default Sidebar;
