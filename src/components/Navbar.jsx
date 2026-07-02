import { useState } from "react";
import "../styles/Css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { business } from "../config/business";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <a className="logo" href="#home" onClick={closeMenu}>
        {business.name} <span>{business.productName}</span>
      </a>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#packages" onClick={closeMenu}>Packages</a></li>
        <li><a href="#demo" onClick={closeMenu}>Demo</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <a className="btn" href="#contact">Get Started</a>

      <button
        className="menu-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
