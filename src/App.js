import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignsAndSymptoms from "./pages/symptoms";
import Navbar from "./components/nav";
import AwarenessPage from "./pages/awareness";
import LanguageSwitcher from './components/LanguageSwitcher';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <LanguageSwitcher />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symptoms" element={<SignsAndSymptoms />} />
        <Route path="/awareness" element={<AwarenessPage />} />
      </Routes>
    </Router>
  );
}

export default App;

