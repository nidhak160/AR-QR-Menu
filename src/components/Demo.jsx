import "../styles/Css/Demo.css";
import demoImage from "../assets/images/Demo-image.png"; 

function Demo() {
  return (
    <section className="demo" id="demo">
      <div className="demo-container">

        <div className="demo-image">
          <img src={demoImage} alt="AR QR Menu Demo" />
        </div>

        <div className="demo-content">
          <h2>Experience the Future of Dining</h2>

          <p>
            Customers simply scan the QR code with their smartphone to access
            an interactive digital menu. With AR technology, they can preview
            dishes in 3D before placing their order.
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
              <p>Place Your Order</p>
            </div>

          </div>

          <button>Book a Free Demo</button>

        </div>

      </div>
    </section>
  );
}

export default Demo;