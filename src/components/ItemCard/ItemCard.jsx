// ItemCard.jsx

import React, { useState, useEffect, useRef } from "react";
import "./ItemCard.css";

const ItemCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("This is a card. Click to edit.");
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/150");
  const textareaRef = useRef(null); // Reference to the textarea

  const handleEdit = () => setIsEditing(!isEditing);
  const handleChange = (e) => setContent(e.target.value);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => setImageUrl(reader.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Effect to adjust the height of the textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
    }
  }, [content]);

  return (
    <div className="item__card" onClick={handleEdit}>
      <img src={imageUrl} alt="Card" className="item__card-image" />
      {isEditing ? (
        <div className="item__card-edit">
          <textarea
            ref={textareaRef}
            value={content}
            onChange={handleChange}
            onBlur={() => setIsEditing(false)}
            autoFocus
            className="item__card-input"
          />
          <input
            type="file"
            onChange={handleImageChange}
            id="fileInput"
            style={{ display: "none" }}
          />
          <button
            className="item__card-file-button"
            onClick={() => document.getElementById("fileInput").click()}
          >
            Edit Image: Choose File
          </button>
        </div>
      ) : (
        <p className="item__card-info">{content}</p>
      )}
    </div>
  );
};

export default ItemCard;
