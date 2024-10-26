// ItemCard.jsx

import React, { useState } from "react";
import "./ItemCard.css";

const ItemCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("This is a card. Click to edit.");
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/150"); // Default image

  const handleEdit = () => setIsEditing(!isEditing);
  const handleChange = (e) => setContent(e.target.value);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // Set the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="item__card" onClick={handleEdit}>
      <img src={imageUrl} alt="Card" className="item__card-image" />
      {isEditing ? (
        <div className="item__card-edit">
          <input
            type="text"
            value={content}
            onChange={handleChange}
            onBlur={() => setIsEditing(false)}
            autoFocus
          />
          <input type="file" onChange={handleImageChange} />
        </div>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
};

export default ItemCard;
