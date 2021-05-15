import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // }
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <nav>
        <div className="nav_flex">
          <label className="logo">
            <img src="./Images/logo.svg" alt="Logo"></img>
          </label>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <img
              src="./Icons/search.svg"
              className="search_logo margin_right"
              alt="Search Icon"
            ></img>
            <img
              src="./Icons/shopping.svg"
              className="margin_right"
              alt="Shopping Icon"
            ></img>
            <img src="./Icons/hamburger.svg" alt="Hamburger Icon"></img>
          </label>
        </div>
        <ul>
          <li>
            <a className="active" href="#">
              <img
                src="./Icons/search.svg"
                className="search_logo"
                alt="Search Icon"
              ></img>
              Search
            </a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">
              <img src="./Icons/shopping.svg" alt="Search Icon"></img>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
