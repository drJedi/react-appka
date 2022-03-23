import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatum cupiditate labore ipsa voluptates consequuntur ratione harum distinctio sint quos repellendus blanditiis, iure quam id exercitationem saepe, magnam eligendi facere.",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Ania Kwiatkowska",
    text: "2222Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse.",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    author: "Jan Kowalski",
    text: "4444Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusantium sapiente perspiciatis id ipsam necessitatibus recusandae unde dolores error sunt officiis ad, voluptatum veniam, blanditiis nam in totam esse.",
  },
];
function HomePage() {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
}

export default HomePage;
