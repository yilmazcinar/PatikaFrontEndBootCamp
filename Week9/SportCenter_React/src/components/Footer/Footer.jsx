import React from "react";
import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterColumns from "./FooterColumns";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <FooterLogo />
          <FooterLinks>
            <FooterColumns />
          </FooterLinks>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
