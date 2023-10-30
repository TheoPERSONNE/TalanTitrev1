import React from "react";
import Sousnav from "./Sousnav";
import imgArt from "./Article.png";
import Navigation from "./Navigation";

import "./Actualites.css";

const articlesData = [
  {
    id: 1,
    title: "Article Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit quam.",
    imageSrc: imgArt,
    link: "#",
  },
  {
    id: 2,
    title: "Article Title 2",
    description:
      "Praesent eu nibh malesuada, hendrerit magna vitae, accumsan lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu elit quam.",
    imageSrc: imgArt, // Replace with the correct image for this article
    link: "#",
  },
  {
    id: 3,
    title: "Article Title 3",
    description:
      "Integer eu risus nec enim suscipit iaculis. Duis in eros quis tortor facilisis volutpat.",
    imageSrc: imgArt, // Replace with the correct image for this article
    link: "#",
  },
  {
    id: 4,
    title: "Article Title 4",
    description:
      "Sed facilisis neque quis ex volutpat, ut tempor nisl malesuada.",
    imageSrc: imgArt, // Replace with the correct image for this article
    link: "#",
  },
  {
    id: 5,
    title: "Article Title 5",
    description:
      "Etiam sit amet augue in turpis euismod faucibus non non justo.",
    imageSrc: imgArt, // Replace with the correct image for this article
    link: "#",
  },
  // Add more articles here as needed
];

const Actualites = () => {
  return (
    <div>
      <Navigation />
      <div className="contenerActu">
        <Sousnav />
        <div className="allActu">
          <div className="articles-container">
            {articlesData.map((article) => (
              <div className="articleActu" key={article.id}>
                <img src={article.imageSrc} alt={article.title} />
                <div className="article-content">
                  <h2>{article.title}</h2>
                  <p className="descp">{article.description}</p>
                  <hr></hr>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actualites;
