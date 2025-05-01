import React from 'react';
import { useState } from 'react';
import logo from "../assets/Sushi-Sensei-logo.png";
import "../styles/style.css";

const Navbar = () => {

  return (
    <nav className='navbar'>
      {/* Left Side - Logo */}
      <div className='nav-left'>
        <a href='/'>
          <img src={logo} alt='Sushi Sensei Logo' className='nav-logo' />
        </a>
      </div>
      {/* Right Side - Language Dropdown & Login Button */}
      <div className='nav-right'>
        <select className='language-dropdown'>
          <option>English (EN)</option>
          <option>German (DE)</option>
        </select>
        <button className='login-icon'>
          LOG IN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
