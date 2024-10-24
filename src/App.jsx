// App.jsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Preloader from "./components/Preloader/Preloader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // New state for loading

  // Simulate loading (for example, after 3 seconds, the preloader disappears)
  setTimeout(() => setIsLoading(false), 3000);

  // If loading, show the preloader
  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Add your routes here */}
          {/* <Route path="/" element={<Main />} />
          <Route path="/another" element={<AnotherPage />} /> */}
        </Routes>
        <Footer />
      </Router>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
