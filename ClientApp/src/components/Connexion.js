import React from "react";
import { Link } from "react-router-dom";
import "./Connexion.css";
import logo from "./ELECTONICSBas.png";

const Connexion = () => {
  return (
    <div className="allConn">
      <div className="container-fluid" id="bodyForm">
        <div className="container" id="details">
          <div className="row">
            <div className="col-xl-6" id="image">
              <img
                src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
                alt="ordinateur"
              />
            </div>
                      <div className="col-xl-6" id="Form">
                          <h2 className="titreCo">Bienvenue !</h2>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <Link to="/Accueil" className="btn btn-primary" id="bouton">
                  Connection
                </Link>
              </form>
              <p></p>
            </div>
          </div>
        </div>
        <div className="container-fluid2" id="bodyForm2">
          <h1>Electronics</h1>
          <img src={logo} alt="Logo" className="logoCo" />
        </div>
      </div>
    </div>
  );
};

export default Connexion;
