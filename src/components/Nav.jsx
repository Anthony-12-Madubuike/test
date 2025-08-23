// src/components/Nav.jsx
import { Link } from "react-router-dom";
import Sidebar from "../pages/Signup/Sidebar";
export default function Nav() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        SWITCH
      </Link>

      {/* Navigation Links */}
      <div className="navbar-menu">
        <Link to="/" className="activeLink">
          Home
        </Link>

        <Link to="/superapp" className="navLinks">
          SuperApp
        </Link>

        {/* Dropdown - For now, just a button (can add JS later) */}
        <div className="dropdown">
          <button className="dropdown-toggle navLinks" type="button">
            Business{" "}
            <i
              className="fa fa-caret-down"
              aria-hidden="true"
              style={{ color: "#656565", marginLeft: "4px" }}
            ></i>
          </button>
          <div className="dropdown-menu">
            <Link to="/startups" className="navLinks">
              For Startups
            </Link>
            <Link to="/enterprises" className="navLinks">
              For Enterprises
            </Link>
          </div>
        </div>

        <Link to="/about" className="navLinks">
          About Us
        </Link>
        <Link to="/careers" className="navLinks">
          Careers
        </Link>
        <Link to="/contact" className="navLinks">
          Contact
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      {/* <button className="navbar-hamburger" id="openSidebar" type="button"
        style={{
          fontSize: '1rem',
          background: 'none',
          border: 'none',
          color: ' rgb(7, 154, 127)',
          cursor: ' pointer',
        }}
      >
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button> */}
      <Sidebar />
    </nav>
  );
}

