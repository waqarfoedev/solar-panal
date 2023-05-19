import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const [home, setHome] = useState("home");
  const handleClick = () => setClick(!click);

  const closeMenu = () => {
    setClick(false);
    setHome("");
  };
  return (
    <div className="nav-bar">
      <div className="header">
        <nav className="contact">
          <a href="/" className="logo-header">
            <img src="/images/logo 1.png" alt="Logo" />
          </a>
          <ul>
            <li>
              <img src="/images/phone-icon.svg" alt="Phone-icon" />
              <span>0203 519 4420</span>
            </li>
            <li>
              <img src="/images/mail-icon.svg" alt="Mail-icon" />
              <span> info@solarinnovatio.com</span>
            </li>
            <li>
              <button className="btn-green" href="#">
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="menu-bar">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#hero" className={home} onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              Chi Siamo
            </a>
          </li>
          <li>
            <a href="#sire" onClick={closeMenu}>
              S.I.R.E
            </a>
          </li>
          <li>
            <a href="#feature">SIRE Features</a>
          </li>
          <li>
            <a href="#benefit">Why SIRE?</a>
          </li>
          <li>
            <a href="#">SIRE Product</a>
          </li>
          <li>
            <a href="#">How it Works?</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
