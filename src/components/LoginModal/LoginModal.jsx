// LoginModal.jsx

import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData, (err) => {
      if (err) {
        setError(err.message);
      } else {
        onClose();
      }
    });
  };

  useEffect(() => {
    if (isOpen) {
      setFormData({ email: "", password: "" });
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      buttonText="Login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="login"
      title="Login"
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
