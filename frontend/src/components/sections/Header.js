import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import "../../style/sections/Header.css";       // Styling

function Header() {
  return (
    <div className="header-main">
      <div className="header-top">
        <input type="search" placeholder="search keyword" />
        <img src="#" alt="Logo" />
        <div>
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />
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
