import React, { useState } from "react";
import "./Contact.css";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll respond shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-subtext">
          We’d love to hear from you. Let's work together to end hunger.
        </p>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-card">
            <div className="contact-item">
              <Mail className="icon" />
              <div>
                <h4>Email</h4>
                <p>support@sharethemeal.org</p>
                <p>dheerajfulara0207@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 88822 69553</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="icon" />
              <div>
                <h4>Address</h4>
                <p>123 Kindness Avenue,<br />New Delhi, India – 110001</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>
                <User className="icon-small" /> Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <Mail className="icon-small" /> Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <MessageSquare className="icon-small" /> Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
