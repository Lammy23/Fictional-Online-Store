import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// npm i --save @fortawesome/fontawesome-svg-core
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import "../../style/sections/Header.css"; // Styling

function Header() {
  useEffect(() => {}, []);
  return (
    <div className="header-main">
      <div className="header-corner">
        <a href="#">EN</a>
        <a href="#">Help</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="header-top">
        <input type="search" placeholder="search keyword" />
        <img src="./react-logo.png" alt="Logo" height={"50px"} />{" "}
        {/* Add the logo image here */}
        <div>
          <FontAwesomeIcon className="header-icons" icon={faUser} />
          <FontAwesomeIcon className="header-icons" icon={faHeart} />
          <FontAwesomeIcon className="header-icons" icon={faCartShopping} />
        </div>
      </div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/phones">Phones</Link>
        <Link to="/laptops">Laptops</Link>
        <Link to="/consoles">Consoles</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  );
}

export default Header;
