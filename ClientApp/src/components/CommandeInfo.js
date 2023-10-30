import React from "react";
import Sousnav from "./Sousnav";
import Navigation from "./Navigation";
import "./CommandeInfo.css";

const CommandeInfo = () => {
  return (
    <div>
      <Navigation />
      <Sousnav />
      <div className="commande-info-container">
        <h2>Informations générales de la commande</h2>
              <p className="infoAdresse">Voici les détails importants de votre commande :</p>
        <ul>
          <li>
            <strong>Date de commande :</strong> 14 août 2023
          </li>
          <li>
            <strong>Numéro de commande :</strong> 3
          </li>
          <li>
            <strong>Statut :</strong> En cours de traitement
          </li>
        </ul>

        <h2 className="prodComm">Produits commandés</h2>
        <table>
          <thead>
            <tr>
              <th>Produit</th>
              <th>Quantité</th>
              <th>Prix unitaire</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Produit 1</td>
              <td>2</td>
              <td>29.99 €</td>
              <td>59.98 €</td>
            </tr>
            <tr>
              <td>Produit 2</td>
              <td>1</td>
              <td>49.99 €</td>
              <td>49.99 €</td>
            </tr>
            {/* Ajoutez davantage de lignes pour chaque produit */}
          </tbody>
        </table>

        <h2 className="prodComm">Adresse de livraison</h2>
              <p className="infoAdresse">
          <strong>Nom :</strong> Maria Dupont
        </p>
              <p className="infoAdresse">
          <strong>Numéro de rue :</strong> 123
        </p>
              <p className="infoAdresse">
          <strong>Rue :</strong> Rue de l'Exemple
        </p>
              <p className="infoAdresse">
          <strong>Ville :</strong> Ville
        </p>
              <p className="infoAdresse">
          <strong>Pays :</strong> Pays
        </p>
              <p className="infoAdresse">
          <strong>Lieu dit</strong> exemple de lieu dit
        </p>
              <p className="infoAdresse">
          <strong>Code postal :</strong> 12345
        </p>
              <p className="infoAdresse">
          <strong>Entreprise :</strong> MariaInc
        </p>
      </div>
    </div>
  );
};

export default CommandeInfo;
