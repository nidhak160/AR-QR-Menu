import "../styles/Css/Hero.css";
import heroImg from "../assets/image/Hero-image.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-text">
          <h1>
            Smart <span>AR QR Menu</span> for Modern Restaurants
          </h1>

          <p>
            Transform your restaurant with digital QR menus and AR experience.
            Customers scan, view, and order instantly.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn"><a href="#demo">Get Demo</a></button>
            <button className="secondary-btn"><a href="#packages">View Packages</a></button>
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-image">
          <img src={heroImg} alt="AR QR Menu" />
        </div>

      </div>
    </section>
  );
}

export default Hero;