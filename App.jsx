// frontend/src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./frontend/src/components/Header/Header";
import Footer from "./frontend/src/components/Footer/Footer";
import Preloader from "./frontend/src/components/Preloader/Preloader";
import RegisterModal from "./frontend/src/components/RegisterModal/RegisterModal";
import LoginModal from "./frontend/src/components/LoginModal/LoginModal";
import Main from "./frontend/src/components/Main/Main";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);

  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);
  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const addItem = () => {
    // Here you might call your API to add an item. For now, we add a placeholder.
    const newItem = {
      id: Date.now(),
      content: "New Item",
      imageUrl: "https://via.placeholder.com/150",
    };
    setItems((prev) => [...prev, newItem]);
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItem = (updatedItem) => {
    setItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <Router>
      <Header
        onRegisterClick={openRegisterModal}
        onLoginClick={openLoginModal}
        onAddItemClick={addItem}
      />
      <Main items={items} onDeleteItem={deleteItem} onUpdateItem={updateItem} />
      <RegisterModal isOpen={isRegisterOpen} onClose={closeRegisterModal} />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeLoginModal}
        onLoginSuccess={setUser}
      />
      <Footer />
    </Router>
  );
}

export default App;
