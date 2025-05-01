import React from "react";
import "../styles/style.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section imprint">
          <h4>IMPRINT</h4>
          <p><strong>Owner:</strong> Mr. Ramesh Sharma</p>
          <p><strong>Responsible supervisory authority:</strong> OA Frankfurt am Main</p>
          <p><strong>Tax number:</strong> 01386942745</p>
        </div>

        <div className="footer-section location">
          <h4>WHERE TO FIND US</h4>
          <p><strong>Dornbusch:</strong> <span className="green-text">Hansaallee 162, 60320 Frankfurt</span></p>
          <p><strong>Thu & Fri:</strong> 11:00 - 22:00</p>
          <p><strong>Mon, Tue, Wed, Sat & Sun:</strong> 16:00 - 22:00</p>
          <p><strong>Tuesday:</strong> Closed</p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-links">
        <a href="#">About Us</a> | <a href="#">Our Story</a> | <a href="#">Mission</a> | 
        <a href="#">Our Partner Network</a> | <a href="#">FAQ</a> | <a href="#">Job</a> | 
        <a href="#">Contact</a> | <a href="#">Data Protection</a> | 
        <a href="#">General Terms and Conditions</a> | © Sushi Sensei
      </div>
    </footer>
  );
};

export default Footer;
