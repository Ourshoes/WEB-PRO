import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevMenuOpen) => !prevMenuOpen);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest(".navbar, .menu-toggle")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header>
      <h1 className="nav-tittle">Our Shoes</h1>
      <div className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`navbar ${menuOpen ? "open" : ""}`} role="navigation">
        <div className="nav-links">
          <Link
            to="/home"
            className={location.pathname === "/home" ? "active" : ""}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/product"
            className={location.pathname === "/product" ? "active" : ""}
            onClick={toggleMenu}
          >
            Product
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
