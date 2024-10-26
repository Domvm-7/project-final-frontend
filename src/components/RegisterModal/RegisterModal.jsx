// RegisterModal.jsx

import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ isOpen, onClose, onRegister }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        avatar: "",
      });
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
        Avatar URL
        <input
          className="modal__input"
          type="text"
          name="avatar"
          placeholder="Avatar URL"
          value={formData.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
