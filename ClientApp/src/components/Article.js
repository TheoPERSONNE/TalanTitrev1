import React from "react";
import "./Article.css";
import art from "./Article.png";

const Article = () => {
  return (
    <div className="article-container">
      <div className="article">
        <img src={art} alt="Article 1" className="article-image" />
        <h2>Titre de l'article 1</h2>
        <p>Contenu de l'article 1...</p>
      </div>
      <div className="article">
        <img src={art} alt="Article 2" className="article-image" />
        <h2>Titre de l'article 2</h2>
        <p>Contenu de l'article 2...</p>
      </div>
      <div className="article">
        <img src={art} alt="Article 3" className="article-image" />
        <h2>Titre de l'article 3</h2>
        <p>Contenu de l'article 3...</p>
      </div>
    </div>
  );
};

export default Article;
