import "../styles/Css/Packages.css";

function Packages() {
  const packages = [
    {
      title: "Starter",
      price: "₹999",
      features: [
        "QR Menu",
        "Up to 20 Menu Items",
        "Basic Support",
        "Mobile Friendly",
      ],
      popular: false,
    },
    {
      title: "Professional",
      price: "₹2499",
      features: [
        "QR + AR Menu",
        "Unlimited Menu Items",
        "Analytics Dashboard",
        "Table Reservation",
        "Priority Support",
      ],
      popular: true,
    },
    {
      title: "Premium",
      price: "₹4999",
      features: [
        "Everything in Professional",
        "Custom Branding",
        "Multi-language Support",
        "Dedicated Support",
      ],
      popular: false,
    },
  ];

  return (
    <section className="packages" id="packages">
      <div className="container">
        <h2>Our Packages</h2>
        <p className="subtitle">
          Choose the perfect plan for your restaurant.
        </p>

        <div className="package-grid">
          {packages.map((item, index) => (
            <div
              key={index}
              className={`package-card ${item.popular ? "popular" : ""}`}
            >
              {item.popular && <span className="badge">Most Popular</span>}

              <h3>{item.title}</h3>

              <h1>{item.price}</h1>

              <ul>
                {item.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <button>Select Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;