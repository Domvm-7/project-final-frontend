// frontend/src/components/Main/Main.jsx
import React from "react";
import About from "../About/About";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

const Main = ({ items, onDeleteItem, onUpdateItem }) => (
  <main className="main">
    <About />
    <h1 className="main__title">Main Content</h1>
    <div className="item-cards-container">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDeleteItem}
          onUpdate={onUpdateItem}
        />
      ))}
    </div>
  </main>
);

export default Main;
