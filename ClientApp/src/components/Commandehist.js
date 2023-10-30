import React, { useState, useEffect } from "react";
import "./Commandehist.css";
import Sousnav from "./Sousnav";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Commandehist = () => {
  // État local pour stocker les données des commandes
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Exemple de données fictives pour les commandes
    const exampleOrders = [
      {
        id: 1,
        status: "en cours",
        startDate: "2023-07-20",
        endDate: null,
      },
      {
        id: 2,
        status: "terminée",
        startDate: "2023-07-15",
        endDate: "2023-07-18",
      },
      {
        id: 3,
        status: "terminée",
        startDate: "2023-07-15",
        endDate: "2023-07-18",
      },
      {
        id: 4,
        status: "terminée",
        startDate: "2023-07-15",
        endDate: "2023-07-18",
      },
      {
        id: 5,
        status: "terminée",
        startDate: "2023-07-15",
        endDate: "2023-07-18",
      },
    ];

    // Dans une application réelle, vous pouvez récupérer les données des commandes depuis une source de données
    // (par exemple, une API) et les stocker dans l'état local.
    setOrders(exampleOrders);
  }, []);

  // Triez les commandes par numéro de commande
  const sortedOrders = orders.sort((a, b) => a.id - b.id);

  return (
    <div>
      <Navigation />
      <div className="Commandehist">
        <Sousnav />
        <div className="Commall">
          <h2>Historique des commandes</h2>
          <table>
            <thead>
              <tr>
                <th>Numéro de commande</th>
                <th>Statut</th>
                <th>Date de commencement</th>
                <th>Date de fin</th>
                <th>Informations</th>
              </tr>
            </thead>
            <tbody>
              {sortedOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td className="status">{order.status}</td>
                  <td className="date">{order.startDate}</td>
                  <td className="date">{order.endDate || "En cours"}</td>
                  <td>
                    <Link to={`/CommandeInfo`}>Voire plus→</Link>
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

export default Commandehist;
