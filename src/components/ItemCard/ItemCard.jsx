// ItemCard.jsx

import React, { useState, useEffect, useRef } from "react";
import "./ItemCard.css";

const ItemCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("This is a card. Click to edit.");
  const [draftContent, setDraftContent] = useState(content);
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/150");
  const [draftImageUrl, setDraftImageUrl] = useState(imageUrl);
  const textareaRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
    setDraftContent(content);
    setDraftImageUrl(imageUrl);
  };

  const handleChange = (e) => setDraftContent(e.target.value);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => setDraftImageUrl(reader.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    setContent(draftContent);
    setImageUrl(draftImageUrl);
    setIsEditing(false);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [draftContent]);

  return (
    <div className="item__card">
      <div className="item__card-content" onClick={handleEdit}>
        <img src={imageUrl} alt="Card" className="item__card-image" />
        {!isEditing && <p className="item__card-info">{content}</p>}
      </div>
      {isEditing && (
        <div className="item__card-edit">
          <textarea
            ref={textareaRef}
            value={draftContent}
            onChange={handleChange}
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
            Choose Image
          </button>
          <button className="item__card-submit-button" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
