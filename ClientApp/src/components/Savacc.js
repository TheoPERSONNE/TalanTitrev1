import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Sousnav from "./Sousnav";
import "./Savacc.css";
import ban1 from "./template1.PNG";
import imgForm from "./logoForm.jpg"

const Savacc = () => {
  return (
    <div>
      <Navigation />
      <div className="allSAV">
        <Sousnav />
        <h1 className="TitreSAV">SAV</h1>
        <img src={ban1} className="ban" alt="banniere" />
        <div className="Container-haut">
          <h3>Déclaration d'incident</h3>
          <Link to="/Tickethist" className="btn btn-primary" id="bouton">
            Toutes mes déclarations
          </Link>
              </div>

              <div className="formsav">
              <div>
        <div className="Container-midle">
          <label for="probleme-select">Selectionner un probleme :</label>
          <select
            className="probleme-select"
            name="probleme"
            id="probleme-select"
          >
            <option value="">Probleme</option>
            <option value="Probleme 1">Probleme 1</option>
            <option value="Probleme 2">Probleme 2</option>
            <option value="Probleme 3">Probleme 3</option>
          </select>
        </div>
        <div className="Container-midle">
          <label for="probleme-select">
            Selectionner le numéro de commande :
          </label>
          <select
            className="probleme-select"
            name="probleme"
            id="probleme-select"
          >
            <option value="">Numéro</option>
            <option value="Probleme 1">Probleme 1</option>
            <option value="Probleme 2">Probleme 2</option>
            <option value="Probleme 3">Probleme 3</option>
          </select>
        </div>
        <div>
          <label className="labelarea" for="description">
            Information supplémentaire
          </label>
          <textarea id="desc" name="description" rows="5" cols="33">
            
          </textarea>
        </div>
        <div className="btn-savdiv">
          <Link to="/Acceuil" className="btn-sav" id="bouton">
            Envoyer
          </Link>
                      </div>
                  </div>
                  <div className="imageSavDroite">
                  <img src={imgForm} className="imgF" alt="img  " />
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Savacc;
