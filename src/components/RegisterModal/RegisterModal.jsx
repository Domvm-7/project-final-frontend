// RegisterModal.jsx
import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { register } from "/src/api/auth.js";

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: null,
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [error, setError] = useState(null); // For error handling
  const [success, setSuccess] = useState(false); // To track registration success

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("password", formData.password);
    if (formData.avatar) {
      data.append("avatar", formData.avatar);
    }

    try {
      await register(data); // Call the API function from auth.js
      setSuccess(true);
      setError(null);
      onClose();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to register");
      setSuccess(false);
    }
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
      setError(null);
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
        <div className="modal__avatar-container">
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
        </div>
      </label>
      {error && <p className="modal__error">{error}</p>}
      {success && <p className="modal__success">Registration successful!</p>}
    </ModalWithForm>
  );
};

export default RegisterModal;
