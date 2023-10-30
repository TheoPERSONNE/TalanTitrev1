import React from "react";
import "./Sousnav.css"; // Import du fichier CSS
import { Link } from "react-router-dom";

const Sousnav = () => {
  return (
    <div className="sous-nav">
      <div className="onglet">
        <Link to="/actualite">Actualité</Link>
      </div>
      <div className="separator"></div>
      <div className="onglet">
        <Link to="/commandehist">Commande</Link>
      </div>
      <div className="separator"></div>
      <div className="onglet">
        <Link to="/savacc">Service</Link>
      </div>
    </div>
  );
};

export default Sousnav;
