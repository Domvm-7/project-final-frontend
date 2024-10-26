// Main.jsx

import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <h1 className="main__title">Main Content</h1>
      <ItemCard />
      {/* Add more <ItemCard /> components if needed */}
    </main>
  );
};

export default Main;
