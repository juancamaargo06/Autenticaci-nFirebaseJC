// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Login from "./components/Login";
import Home from "./components/Home";
import "./i18n"; // Importa la configuración de i18next

function App() {
  return (
    <Router>
      <div>
        {/* Colocamos el selector de idioma en una zona común */}
        <LanguageSwitcher />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
