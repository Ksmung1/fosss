import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();  // Use location to detect the current URL

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const navClass = isActive ? "navbar-links active" : "navbar-links";

  // Function to check if the current path is active
  const isActiveLink = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <div id="Navbar">
      <nav className="navbar">
        {/* eslint-disable-next-line */}
        <a href="#" className="toggle-button" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className={navClass}>
          <ul>
            <button
              style={{
                fontSize: "27px",
                cursor: "pointer",
                maxWidth: "40px",
                minHeight: "40px",
              }}
              onClick={closeMenu}
            >
              x
            </button>
            <p></p>
            <p>
              <input
                type="text"
                placeholder="Search"
                style={{
                  backgroundColor: "black",
                  width: "200px",
                  border: "1px solid white",
                  marginBottom: "10px",
                }}
              />
            </p>

            <li>
              <NavLink to="/" className={isActiveLink("/")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/upExams" className={isActiveLink("/upExams")}>
                Upcoming Exams
              </NavLink>
            </li>
            <li>
              <NavLink to="/ncert" className={isActiveLink("/ncert")}>
                NCERT
              </NavLink>
            </li>
            <li>
              <NavLink to="/currentAffairs" className={isActiveLink("/currentAffairs")}>
                Current Affairs
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className={isActiveLink("/news")}>
                Newspaper
              </NavLink>
            </li>
            <li>
              <NavLink to="/soon" className={isActiveLink("/soon")}>
                PIB
              </NavLink>
            </li>
            <li>
              <NavLink to="/magazines" className={isActiveLink("/magazines")}>
                Magazines
              </NavLink>
            </li>
            <li>
              <NavLink to="/ga" className={isActiveLink("/ga")}>
                General Awareness
              </NavLink>
            </li>
            <li>
              <NavLink to="/cg" className={isActiveLink("/cg")}>
                Career Guidance
              </NavLink>
            </li>
            <li>
              <NavLink to="/ab" className={isActiveLink("/ab")}>
                About
              </NavLink>
            </li>
            <li>
              <a href="tel:89748 08279">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {isActive && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
}

export default Navbar;
