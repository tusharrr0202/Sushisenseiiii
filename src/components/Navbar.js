import React, { useState } from 'react';
import logo from '../assets/Sushi-Sensei-logo.png';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1px 8px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Left side: Logo */}
        <div>
          <a href="/">
            <img src={logo} alt="Sushi Sensei Logo" style={{ height: '50px' }} />
          </a>
        </div>

        {/* Right side: Dropdown and Login button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <select style={{
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}>
            <option>English (EN)</option>
            <option>German (DE)</option>
          </select>
          <button
            onClick={openLoginModal}
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            LOG IN
          </button>
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            position: 'relative',
            minWidth: '300px',
            textAlign: 'center'
          }}>
            <button
              onClick={closeLoginModal}
              style={{
                position: 'absolute',
                top: '9px',
                right: '15px',
                background: 'black',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                margin: '10px 0',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                marginBottom: '15px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Submit
            </button>

            <button
              onClick={() => alert("Redirecting to password recovery...")}
              style={{
                marginTop: '10px',
                background: 'none',
                border: 'none',
                color: '#007bff',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: '14px'
              }}
            >
              Forgot Password?
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
