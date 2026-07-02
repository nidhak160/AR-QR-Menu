import { useState } from "react";
import "../styles/Css/Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/fa";
import { business } from "../config/business";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your enquiry..." });

    const payload = {
      ...formData,
      _subject: "New AR QR Menu lead from B Socio landing page",
      source: "B Socio AR QR Menu landing page",
    };

    try {
      const response = await fetch(business.leadEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead endpoint rejected the request");
      }

      setStatus({
        type: "success",
        message: "Thanks. B Socio has received your enquiry and will contact you shortly.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      const mailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${business.email}?subject=AR QR Menu enquiry&body=${mailBody}`;
      setStatus({
        type: "success",
        message: "Your email app is opening with the enquiry details.",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="section-kicker">Contact B Socio</span>
          <h2>Launch a better menu experience.</h2>
          <p className="contact-subtitle">
            Tell us about your restaurant and B Socio will help you plan the
            right QR menu, AR preview, and lead-ready digital ordering flow.
          </p>

          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <p>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h4>Phone</h4>
                <p>{business.phone}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>Location</h4>
                <p>{business.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Book a Restaurant Demo</h3>

            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Business email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Restaurant name, city, and what you need"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={status.type === "loading"}>
              <FaPaperPlane /> {status.type === "loading" ? "Sending..." : "Send Enquiry"}
            </button>

            {status.message && (
              <p className={`form-status ${status.type}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
