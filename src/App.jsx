import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarsPage from "./pages/CarsPage";
import VideoPage from "./pages/VideoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Benefits from "./pages/Benefits";
import Footer from "./pages/Footer";
import "./styles/Navbar.css";
import accountIcon from "./assets/account-icon.png"; 

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Domů</Link>
            <Link to="/cars" onClick={() => setMenuOpen(false)}>Výběr aut</Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>O nás</Link>
            <Link to="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
          </div>

          
          <div className="login-icon">
            <Link to="/login">
              <img src={accountIcon} alt="Účet" className="account-icon" />
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<><HomePage /><CarsPage /><VideoPage /><Benefits /><Footer /></>} />
          <Route path="/cars" element={<><CarsPage /><Benefits /><Footer /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
