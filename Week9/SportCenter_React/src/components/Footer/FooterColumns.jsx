import React from "react";

const FooterColumns = () => {
  const informationLinks = [
    { text: "About Us", href: "#" },
    { text: "Classes", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Contact", href: "#" },
  ];

  const helpfulLinks = [
    { text: "Services", href: "#" },
    { text: "Supports", href: "#" },
    { text: "Terms & Condition", href: "#" },
    { text: "Privacy Policy", href: "#" },
  ];

  return (
    <>
      <div className="footer-column">
        <h4>Information</h4>
        <ul>
          {informationLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h4>Helpful Links</h4>
        <ul>
          {helpfulLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterColumns;
