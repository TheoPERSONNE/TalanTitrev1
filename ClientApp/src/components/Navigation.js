import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "./ELECTONICSBas.png";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Utilisation de Link pour créer un lien vers la page d'accueil */}
        <Link to="/Accueil">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/profil">Profil</Link>
        <Link to="/" id="bouton">
          <button>Déconnexion</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
