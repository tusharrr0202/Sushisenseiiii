import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import LoginModal from "./pages/Login";
import SignupModal from "./pages/Signup"; // Import SignupPage
// App.js
import '../src/styles/style.css';

import Footer from "./components/Footer.jsx";

const App = () => {

  return (
    
    <Router>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/menu" element={<h1>Menu Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/Login" element={<LoginModal />} />
        <Route path="/signup" element={<SignupModal />} /> {/* Route for SignupPage */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>

      <Footer />

    </Router>
  );
};

export default App;