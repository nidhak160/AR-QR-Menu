import "../styles/Css/Hero.css";
import heroImg from "../assets/image/Hero-image.png";
import { business } from "../config/business";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-text">
          <span className="section-kicker">Built by {business.name}</span>
          <h1>
            Premium <span>{business.productName}</span> for modern restaurants
          </h1>

          <p>
            Give guests a polished scan-to-order experience with digital menus,
            AR dish previews, booking flows, and analytics that help your team
            sell smarter.
          </p>

          <div className="hero-buttons">
            <a className="primary-btn" href="#contact">Book a Demo</a>
            <a className="secondary-btn" href="#packages">View Packages</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="B Socio AR QR Menu preview" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
