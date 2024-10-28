// App.jsx

import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import LoginModal from "./components/LoginModal/LoginModal";
import Main from "./components/Main/Main";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [itemCards, setItemCards] = useState([]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);
  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const addItemCard = () => {
    setItemCards((prevCards) => [...prevCards, { id: Date.now() }]);
  };

  const deleteItemCard = (id) => {
    setItemCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Header
        onRegisterClick={openRegisterModal}
        onLoginClick={openLoginModal}
        onAddItemClick={addItemCard}
      />
      <Main itemCards={itemCards} onDelete={deleteItemCard} />
      <RegisterModal isOpen={isRegisterOpen} onClose={closeRegisterModal} />
      <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} />
      <Footer />
    </Router>
  );
}

export default App;
