import "../styles/Css/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { business } from "../config/business";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>{business.productName}</h2>
          <p>
            A premium restaurant menu and AR preview experience by {business.name}.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#demo">Demo</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: <a href={`mailto:${business.email}`}>{business.email}</a></p>
          <p>Phone: {business.phone}</p>
          <p>Location: {business.location}</p>
        </div>

        <div className="footer-social">
          <h3>Follow</h3>
          <div className="social-icons">
            <a href={business.facebook} aria-label="Facebook"><FaFacebookF /></a>
            <a href={business.instagram} aria-label="Instagram"><FaInstagram /></a>
            <a href={business.linkedin} aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 {business.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
