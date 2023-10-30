import React from "react";
import { Link } from "react-router-dom";
import Sousnav from "./Sousnav";
import Navigation from "./Navigation";

const Nouvelleuser = () => {
  return (
    <div>
      <Navigation />
      <Sousnav />
      <h1>Nouvelle utilisateur</h1>;
      <div>
        <p>
          Veuillez rentrez les information correspondante pour la création d'un
          nouvelle utilisateur
        </p>
        <label for="nom-select">
          <textarea id="desc" name="description" rows="2" cols="10"></textarea>
        </label>
        <label for="prenom-select">
          <textarea id="desc" name="description" rows="2" cols="10"></textarea>
        </label>
        <label for="telephone-select">
          <textarea id="desc" name="description" rows="2" cols="10"></textarea>
        </label>
        <label for="fixe-select">
          <textarea id="desc" name="description" rows="2" cols="10"></textarea>
        </label>
        <label for="ville-select">
          <textarea id="desc" name="description" rows="2" cols="10"></textarea>
        </label>
        <label for="email-select">
          <textarea id="desc" name="description" rows="2" cols="10"></textarea>
        </label>
        <div className="btn-savdiv">
          <Link to="/Acceuil" className="btn-sav" id="bouton">
            Envoyer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nouvelleuser;
