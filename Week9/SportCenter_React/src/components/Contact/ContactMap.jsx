import React from "react";

const ContactMap = () => {
  return (
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.9598043675!2d28.850263062795654!3d41.00537616252013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1672740230097!5m2!1str!2str"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Maps Location"
      ></iframe>
    </div>
  );
};

export default ContactMap;
