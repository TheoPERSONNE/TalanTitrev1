import React, { useState, useEffect } from "react";
import "./Tickethist.css";
import Sousnav from "./Sousnav";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Tickethist = () => {
  // État local pour stocker les données des tickets
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Exemple de données fictives pour les tickets
    const exampleTickets = [
      {
        id: 1,
        status: "en cours",
        startDate: "2023-05-09",
        endDate: null,
      },
      {
        id: 2,
        status: "terminé",
        startDate: "2023-05-15",
        endDate: "2023-05-18",
      },
      {
        id: 3,
        status: "terminé",
        startDate: "2023-06-18",
        endDate: "2023-07-01",
      },
      {
        id: 4,
        status: "terminé",
        startDate: "2023-07-15",
        endDate: "2023-07-18",
      },
      {
        id: 5,
        status: "terminé",
        startDate: "2023-07-15",
        endDate: "2023-07-18",
      },
    ];

    // Dans une application réelle, vous pouvez récupérer les données des tickets depuis une source de données
    // (par exemple, une API) et les stocker dans l'état local.
    setTickets(exampleTickets);
  }, []);

  // Triez les tickets par numéro de ticket
  const sortedTickets = tickets.sort((a, b) => a.id - b.id);

  return (
    <div>
      <Navigation />
      <div className="Tickethist">
        <Sousnav />
        <div className="Ticketall">
          <h2>Historique des tickets&nbsp;&nbsp;</h2>
          <table>
            <thead>
              <tr>
                <th>
                  Numéro de
                  ticket&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </th>
                <th>Statut</th>
                <th>Date de commencement</th>
                <th>Date de fin</th>
                <th>Informations</th>
              </tr>
            </thead>
            <tbody>
              {sortedTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td className="status">{ticket.status}</td>
                  <td className="date">{ticket.startDate}</td>
                  <td className="date">{ticket.endDate || "En cours"}</td>
                  <td>
                    <Link to={`/TicketInfo`}>Voire plus→</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tickethist;
