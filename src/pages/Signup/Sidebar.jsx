import { useState } from 'react';
import './Sidebar.css';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <>
      {/* Hamburger */}
      <button
        type="button"
        className="navbar-hamburger"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <button
          type="button"
          className="sidebar-close"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        >
          <i className="fa fa-times"></i>
        </button>

        <a href="#">Home</a>
        <a href="#">SuperApp</a>

        <div className="dropdown">
          <button
            type="button"
            className="dropdown-toggle"
            onClick={() => toggleDropdown('business')}
          >
            Business <i className="fa fa-caret-down"></i>
          </button>
          <div className={`dropdown-menu ${openDropdown === 'business' ? 'show' : ''}`}>
            <a href="#">For Startups</a>
            <a href="#">For Enterprises</a>
          </div>
        </div>

        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}