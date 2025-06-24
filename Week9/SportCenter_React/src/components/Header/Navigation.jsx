import React from "react";

const Navigation = ({ onSmoothScroll, isMobileMenuOpen }) => {
  const navigationItems = [
    { href: "#home", text: "Home" },
    { href: "#classes", text: "Classes" },
    { href: "#trainer", text: "Trainer" },
    { href: "#review", text: "Review" },
    { href: "#contact", text: "Contact" },
  ];

  const handleJoinClick = (e) => {
    e.preventDefault();
    alert("Welcome! Join us functionality would be implemented here.");
  };

  return (
    <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
      {navigationItems.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              onSmoothScroll(item.href);
            }}
          >
            {item.text}
          </a>
        </li>
      ))}
      <li>
        <a href="#" className="btn-join" onClick={handleJoinClick}>
          <i className="fas fa-user-plus"></i> JOIN US
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
