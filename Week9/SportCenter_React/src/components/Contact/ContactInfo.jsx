import React, { useState } from "react";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting us.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-info">
      <div className="contact-item">
        <h4>Mobile Number</h4>
        <p>+90 506 508 10 00</p>
      </div>
      <div className="contact-item">
        <h4>Email Address</h4>
        <p>example@gmail.com</p>
      </div>
      <div className="contact-form-section">
        <h4>Make An Appointment</h4>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="form-input"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;
