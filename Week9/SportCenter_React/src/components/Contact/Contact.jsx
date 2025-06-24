import React from "react";
import SectionHeader from "./SectionHeader";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <SectionHeader
          title="CONTACT US"
          description="Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College."
        />
        <div className="contact-wrapper">
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
