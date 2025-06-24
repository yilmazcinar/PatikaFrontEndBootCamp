import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav-wrapper">
          <Logo />
          <Navigation
            onSmoothScroll={handleSmoothScroll}
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
