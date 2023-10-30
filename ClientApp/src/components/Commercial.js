import React from "react";
import { Link } from "react-router-dom";
import "./Commercial.css";

const Commercial = () => {
  return (
    <div className="allcommercial">
      <h2>Bonjour monsieur Dupont</h2>
      <div className="boitegestion">
        <div>
          <h3>Gestion Client</h3>
        </div>
        <div>
          <p>utilisateur</p>
        </div>
        <div>
          <select name="utilisateur" className="utilisateur-select">
            <option value=""></option>
            <option value="Utilisateur 1">Utilisateur 1</option>
            <option value="Utilisateur 2">Utilisateur 2</option>
            <option value="Utilisateur 3">Utilisateur 3</option>
          </select>
        </div>
        <div>
          <Link to="/Commercial" className="btn-savc" id="bouton">
            Acceder a la vue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
