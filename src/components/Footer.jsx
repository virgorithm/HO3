import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Walang laman dito. Parang wallet ko pag petsa de peligro.

</p>
      <div className="footer-links">
        <a href="https://github.com/virgorithm" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://ph.pinterest.com/pin/120260252545590594/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.facebook.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
