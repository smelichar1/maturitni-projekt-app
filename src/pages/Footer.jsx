import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Střed - EasyRent (Nyní uprostřed) */}
        <div className="footer-center">
          <h3>EasyRent</h3>
          <p>Výběr aut</p>
          <p>O nás</p>
          <p>Kontaktovat</p>
        </div>

        {/* Pravá část - Kontakt + Ikony */}
        <div className="footer-right">
          <h3>Kontaktovat</h3>
          <p>info@easyrent.cz</p>
          <p>+420 123 456 789</p>

          {/* Ikony pod kontaktem */}
          <div className="footer-icons">
            <FaInstagram className="footer-icon" />
            <FaTwitter className="footer-icon" />
          </div>
        </div>
      </div>

      {/* Copyright na střed */}
      <p className="footer-bottom">© 2025 EasyRent.cz s.r.o</p>
    </footer>
  );
};

export default Footer;
