import React from "react";
import SearchButton from "./buttons/SearchButton";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProfileButton from "./buttons/ProfileButton";

function Header() {
  return (
    <div className="padding">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <SearchButton />
        <Logo />
        <div className="row">
          <FontAwesomeIcon icon={faShoppingCart} />
          <div style={{ width: "50px" }}></div>
          <ProfileButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
