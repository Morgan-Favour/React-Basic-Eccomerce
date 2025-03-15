import React from 'react';
import companyLogo from "../assets/images/company-logo.png";
import "../css/navbar.css";
import "../css/global.css";
import "../css/responsive.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-buttons">
          <img className="company-logo" src={companyLogo} alt="Logo" />
          <div className="nav-buttons">
            <button className="btn-dark">Sign Up</button>
            <button className="btn-light">Sign In</button>
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Featured Products</a></li>
          <li><a href="#about">Recommended Products</a></li>
        </ul>
        <form action="" className="search-bar">
          <input type="text" placeholder="Search Products" />
        </form>
      </div>
    </nav>
  );
}

export default NavBar;