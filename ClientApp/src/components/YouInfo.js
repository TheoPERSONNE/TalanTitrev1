import React from "react";
import "./YouInfo.css";

const YouInfo = () => {
  return (
    <div className="you-info-container">
      <div className="left-info">
        <p className="infop">Ville : Ville</p>
        <p className="infop">Code Postal : Code Postal</p>
        <p className="infop">Email : email@example.com</p>
      </div>
      <div className="separatorinfo"></div>
      <div className="right-info">
        <p className="infop">Téléphone Fixe : 01 23 45 67 89</p>
        <p className="infop">Téléphone Mobile : 06 12 34 56 78</p>
      </div>
    </div>
  );
};

export default YouInfo;
