import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="pageadmin">
      <h2 className="h2admin">Bonjour monsieur Dupont</h2>
      <div>
        <h3 className="h3admin">Gestion Client</h3>
        <div className="alla">
          <div className="alladmin">
            <div>
              <div className="padmin">
                <p>utilisateur</p>
                <p c>Créer un utilisateur</p>
              </div>
            </div>
            <div className="container-select">
              <div>
                <select
                  className="admin-select"
                  name="utilisateur"
                  id="utilisateur-select"
                >
                  <option value=""></option>
                  <option value="Utilisateur 1">Utilisateur 1</option>
                  <option value="Utilisateur 2">Utilisateur 2</option>
                  <option value="Utilisateur 3">Utilisateur 3</option>
                </select>
              </div>
              <div>
                <Link to="/Admin" className="btn-admin" id="bouton">
                  Acceder
                </Link>
              </div>
            </div>
          </div>
          <div className="alladmin">
            <div>
              <div className="padmin">
                <p>Supprimer l'utilisateur selectionner</p>
              </div>
            </div>
            <div className="container-select">
              <div>
                <select
                  className="admin-select"
                  name="delete"
                  id="delete-select"
                >
                  <option value=""></option>
                  <option value="Utilisateur 1">Utilisateur 1</option>
                  <option value="Utilisateur 2">Utilisateur 2</option>
                  <option value="Utilisateur 3">Utilisateur 3</option>
                </select>
              </div>
              <div>
                <Link to="/Admin" className="btn-admin" id="bouton">
                  Supprimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
