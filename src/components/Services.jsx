import "../styles/Css/Services.css";
import {
  FaQrcode,
  FaMobileAlt,
  FaChartLine,
  FaPalette,
  FaLanguage,
  FaCalendarAlt,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaQrcode />,
      title: "QR Menu",
      description:
        "Customers can scan the QR code and instantly access your digital menu.",
    },
    {
      icon: <FaMobileAlt />,
      title: "AR Experience",
      description:
        "View food in 3D before ordering with immersive augmented reality.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      description:
        "Track menu views, customer engagement, and ordering trends.",
    },
    {
      icon: <FaPalette />,
      title: "Custom Branding",
      description:
        "Match the menu with your restaurant's brand identity and colors.",
    },
    {
      icon: <FaLanguage />,
      title: "Multi Language",
      description:
        "Offer menus in multiple languages for international customers.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Table Booking",
      description:
        "Allow customers to reserve tables directly from the QR menu.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="subtitle">
          Everything your restaurant needs to deliver a modern dining
          experience.
        </p>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;