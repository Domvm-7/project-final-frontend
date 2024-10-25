// App.jsx

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import LoginModal from "./components/LoginModal/LoginModal";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Simulate loading (e.g., after 3 seconds, the preloader disappears)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  // If loading, show the preloader
  if (isLoading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Header
        onRegisterClick={openRegisterModal}
        onLoginClick={openLoginModal}
      />
      <main>
        {/* Modals */}
        <RegisterModal isOpen={isRegisterOpen} onClose={closeRegisterModal} />
        <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} />

        <Routes>{/* Define your routes here */}</Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
