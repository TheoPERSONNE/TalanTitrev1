import React from "react";
import "./TicketInfo.css";
import Sousnav from "./Sousnav";
import Navigation from "./Navigation";

const TicketInfo = () => {
  return (
    <div>
      <Navigation />
      <Sousnav />
      <div className="ticket-info-container">
        <h2>Détails du Ticket SAV</h2>
              <p className="infoAdresse">
          <strong>Numéro de ticket :</strong> TS123456
        </p>
              <p className="infoAdresse">
          <strong>Date de création :</strong> 14 août 2023
        </p>
              <p className="infoAdresse">
          <strong>Statut :</strong> En attente de traitement
        </p>

        <h2 className="titleTicket">Description du Problème</h2>
              <p className="infoAdresse">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          ultrices libero. Maecenas ullamcorper vestibulum purus, vel eleifend
          tellus facilisis eu. Aenean tincidunt quam ut posuere. Nullam bibendum
          mi eu nisi efficitur, at bibendum justo gravida.
        </p>

        <h2 className="titleTicket">Actions Récentes</h2>
        <ul>
          <li>14 août 2023 - Ticket créé</li>
          <li>15 août 2023 - Évaluation initiale effectuée</li>
          <li>16 août 2023 - Renvoie en cours des produits manquants</li>
        </ul>
      </div>
    </div>
  );
};

export default TicketInfo;
