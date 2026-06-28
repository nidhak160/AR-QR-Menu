import "../styles/Css/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>AR QR Menu</h2>
          <p>
            Transforming restaurants with smart QR and AR experiences.
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

          <p>Email: hello@arqrmenu.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 AR QR Menu. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;