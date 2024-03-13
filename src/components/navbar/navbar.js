import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaHome, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { useState } from "react";
import Socials from "../socials/socials";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav__link active-nav" : "nav__link"
              }
              onClick={() => setShowMenu(!showMenu)}
            >
              <FaHome className="nav__icon" />
              <h3 className="nav__name">Home</h3>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "nav__link active-nav" : "nav__link"
              }
              onClick={() => setShowMenu(!showMenu)}
            >
              <HiLightBulb className="nav__icon" />
              <h3 className="nav__name">Skills</h3>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav__link active-nav" : "nav__link"
              }
              onClick={() => setShowMenu(!showMenu)}
            >
              <FaFolderOpen className="nav__icon" />
              <h3 className="nav__name">Projects</h3>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? "nav__link active-nav" : "nav__link"
              }
              onClick={() => setShowMenu(!showMenu)}
            >
              <FaEnvelopeOpen className="nav__icon" />
              <h3 className="nav__name">Contacts</h3>
            </NavLink>
          </li>
        </ul>
        <Socials />
      </div>
      <div
        className={`${showMenu ? "nav__toggle animate-toggle" : "nav__toggle"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
