import React from "react";

const MobileMenu = ({ onToggle }) => {
  return (
    <div className="mobile-menu-btn" onClick={onToggle}>
      <i className="fas fa-bars"></i>
    </div>
  );
};

export default MobileMenu;
