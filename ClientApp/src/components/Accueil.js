import React from "react";
import Sousnav from "./Sousnav";
import Carousel from "./Carousel";
import Navigation from "./Navigation";
import Newsletter from "./Newletter";

import "./Accueil.css";
import Article from "./Article";

const MyComponent = () => {
  return (
    <div>
      <Navigation />
      <Sousnav />
      <h1 className="ban">Bienvenue Maria</h1>
      <Carousel />
      <Newsletter />
      <Article />
    </div>
  );
};

export default MyComponent;
