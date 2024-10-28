// RegisterModal.jsx

import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: null,
  });
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, avatar: file });
      const reader = new FileReader();
      reader.onloadend = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  useEffect(() => {
    if (isOpen) {
      setFormData({
        username: "",
        email: "",
        password: "",
        avatar: null,
      });
      setAvatarPreview(null);
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      buttonText="Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="sign up"
      title="Sign Up"
    >
      <label className="modal__label">
        Username
        <input
          className="modal__input"
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Choose Avatar
        <button
          type="button"
          className="modal__file-button"
          onClick={() => document.getElementById("avatarInput").click()}
        >
          Choose Avatar
        </button>
        <input
          type="file"
          id="avatarInput"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        {avatarPreview && (
          <img
            src={avatarPreview}
            alt="Avatar Preview"
            className="modal__avatar-preview"
          />
        )}
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
