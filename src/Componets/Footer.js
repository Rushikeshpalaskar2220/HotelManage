import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src="./images/logo.png" alt="name" className="flogo-img" />
      <div className="container">
        <div className="social-links">
          <a href="https://www.instagram.com/rassa.bhakri/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/RassaBhakriShirur/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="https://wa.me/9822380705" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.google.com/maps/place/Hotel+Rassa+Bhakari/@18.8240309,74.3722437,15z/data=!4m6!3m5!1s0x3bc32da9e1b6fb13:0xf3a5948b1ff66186!8m2!3d18.8240309!4d74.3722437!16s%2Fg%2F11fjzxr29t"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="fas fa-map-marked-alt"></i>
          </a>
        </div>
        <div className="copyright"><b>&copy;</b> 2018 Hotel Rassa Bhakri.</div>
      </div>
    </footer>
  );
};

export default Footer;