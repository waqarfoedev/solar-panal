import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("");
  const [home, setHome] = useState("home");
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [toggleMenuMobile, setToggleMenuMobile] = useState(true);

  const handleClick = (event) => {
    setActive(event.target.id);
    setHome("");
  };

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  window.addEventListener("scroll", function () {
    var div = document.getElementById("myDiv");
    if (window.scrollY > 0) {
      div.classList.add("hidden");
    } else {
      div.classList.remove("hidden");
    }
  });

  return (
    <div className="nav-bar">
      <div className="header">
        <nav className="contact" id="myDiv">
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
              <a className="btn-green" href="#contact_us">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-bar desktop">
        <ul className="listt">
          <li className="items">
            <a
              href="#"
              key={1}
              className={active !== "1" ? undefined || home : "active"}
              id={"1"}
              onClick={handleClick}
            >
              Home
            </a>
          </li>
          <li className="items">
            <a
              href="#about"
              key={2}
              className={active === "2" ? "active" : undefined}
              id={"2"}
              onClick={handleClick}
            >
              Chi Siamo
            </a>
          </li>
          <li className="items">
            <a
              href="#sire"
              key={3}
              className={active === "3" ? "active" : undefined}
              id={"3"}
              onClick={handleClick}
            >
              S.I.R.E
            </a>
          </li>
          <li className="items">
            <a
              href="#feature"
              key={4}
              className={active === "4" ? "active" : undefined}
              id={"4"}
              onClick={handleClick}
            >
              SIRE Features
            </a>
          </li>
          <li className="items">
            <a
              href="#benefit"
              key={5}
              className={active === "5" ? "active" : undefined}
              id={"5"}
              onClick={handleClick}
            >
              Why SIRE?
            </a>
          </li>
          <li className="items">
            <a
              href="#offers"
              key={6}
              className={active === "6" ? "active" : undefined}
              id={"6"}
              onClick={handleClick}
            >
              SIRE Product
            </a>
          </li>
          <li className="items">
            <a
              href="#process"
              key={7}
              className={active === "7" ? "active" : undefined}
              id={"7"}
              onClick={handleClick}
            >
              How it Works?
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-bar mobile">
        {toggleMenu && (
          <ul className="listt">
            <li className="items">
              <a
                href="#"
                key={1}
                className={active !== "1" ? undefined || home : "active"}
                id={"1"}
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="items">
              <a
                href="#about"
                key={2}
                className={active === "2" ? "active" : undefined}
                id={"2"}
                onClick={handleClick}
              >
                Chi Siamo
              </a>
            </li>
            <li className="items">
              <a
                href="#sire"
                key={3}
                className={active === "3" ? "active" : undefined}
                id={"3"}
                onClick={handleClick}
              >
                S.I.R.E
              </a>
            </li>
            <li className="items">
              <a
                href="#feature"
                key={4}
                className={active === "4" ? "active" : undefined}
                id={"4"}
                onClick={handleClick}
              >
                SIRE Features
              </a>
            </li>
            <li className="items">
              <a
                href="#benefit"
                key={5}
                className={active === "5" ? "active" : undefined}
                id={"5"}
                onClick={handleClick}
              >
                Why SIRE?
              </a>
            </li>
            <li className="items">
              <a
                href="#offers"
                key={6}
                className={active === "6" ? "active" : undefined}
                id={"6"}
                onClick={handleClick}
              >
                SIRE Product
              </a>
            </li>
            <li className="items">
              <a
                href="#process"
                key={7}
                className={active === "7" ? "active" : undefined}
                id={"7"}
                onClick={handleClick}
              >
                How it Works?
              </a>
            </li>
          </ul>
        )}
        <button onClick={toggleNav} className="btn_icon">
          MENU
        </button>
      </div>
    </div>
  );
};

export default Header;
