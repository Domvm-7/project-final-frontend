// ItemCard.jsx

import React, { useState } from "react";
import "./ItemCard.css";

const ItemCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("This is a card. Click to edit.");

  const handleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e) => setContent(e.target.value);

  return (
    <div className="item__card" onClick={handleEdit}>
      {isEditing ? (
        <input
          type="text"
          value={content}
          onChange={handleChange}
          onBlur={() => setIsEditing(false)}
          autoFocus
        />
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
};

export default ItemCard;
