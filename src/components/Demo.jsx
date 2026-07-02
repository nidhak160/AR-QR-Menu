import "../styles/Css/Demo.css";
import demoImage from "../assets/image/Demo-image.png";

function Demo() {
  return (
    <section className="demo" id="demo">
      <div className="demo-container">
        <div className="demo-image">
          <img src={demoImage} alt="AR QR Menu demo on a phone" />
        </div>

        <div className="demo-content">
          <span className="section-kicker">Guest Journey</span>
          <h2>From table scan to confident order.</h2>

          <p>
            Customers open the menu instantly, explore dishes visually, and move
            from curiosity to ordering without waiting for printed menus or
            staff handoffs.
          </p>

          <div className="demo-steps">
            <div className="step">
              <span>1</span>
              <p>Scan QR Code</p>
            </div>

            <div className="step">
              <span>2</span>
              <p>Explore Digital Menu</p>
            </div>

            <div className="step">
              <span>3</span>
              <p>View Food in AR</p>
            </div>

            <div className="step">
              <span>4</span>
              <p>Place the Order</p>
            </div>
          </div>

          <a className="demo-btn" href="#contact">Book a Free Demo</a>
        </div>
      </div>
    </section>
  );
}

export default Demo;
