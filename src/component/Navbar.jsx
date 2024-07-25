import React, { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const clickedLinkCloseMenuHandler = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="header">
        <h2>logo</h2>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a onClick={clickedLinkCloseMenuHandler} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={clickedLinkCloseMenuHandler} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={clickedLinkCloseMenuHandler} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={clickedLinkCloseMenuHandler} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
