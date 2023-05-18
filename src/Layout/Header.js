import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="contact">
          <a className="logo-header" href="#">
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
        <ul>
          <li>
            <a className="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Chi Siamo</a>
          </li>
          <li>
            <a href="#">S.I.R.E</a>
          </li>
          <li>
            <a href="#">SIRE Features</a>
          </li>
          <li>
            <a href="#">Why SIRE?</a>
          </li>
          <li>
            <a href="#">SIRE Product</a>
          </li>
          <li>
            <a href="#">How it Works?</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
