// Main.jsx

import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

const Main = ({ itemCards, onDelete }) => {
  return (
    <main className="main">
      <h1 className="main__title">Main Content</h1>
      <div className="item-cards-container">
        {itemCards.map((card) => (
          <ItemCard key={card.id} onDelete={() => onDelete(card.id)} />
        ))}
      </div>
    </main>
  );
};

export default Main;
