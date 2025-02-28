import React from "react";
import "../styles/Contact.css"; // Import CSS
import mapImage from "../assets/map.png"; // Obrázek mapy

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hlavní nadpis a čára */}
      <div className="title-container">
        <h1 className="page-title-contact">Kontaktujte nás</h1>
        <div className="title-underline"></div>
      </div>

      {/* Formulář */}
      <div className="contact-box">
        <form>
          <div className="name-fields">
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Váš email" />
            </div>
            <div className="input-group">
              <label>Telefon</label>
              <input type="tel" placeholder="Váš telefon" />
            </div>
          </div>
          <div className="input-group">
            <label>Napište zprávu</label>
            <textarea placeholder="Vaše zpráva"></textarea>
          </div>
          <button className="submit-button">Odeslat</button>
        </form>
      </div>

      {/* Nadpis pro sekci s mapou */}
      <div className="title-container">
        <h2 className="page-title-contact">Kde nás najdete?</h2>
        <div className="title-underline"></div>
      </div>

      {/* Sekce s mapou */}
      <div className="map-section">
        <img src={mapImage} alt="Mapa" className="map-image" />
        <div className="contact-info">
          <p className="address"><strong>Dřevnická 1788, 760 01 Zlín</strong></p>
          <p>info@easyrent.cz</p>
          <p>+420 123 456 789</p>
          <div className="social-icons">
            <span>🐦</span> <span>📘</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
