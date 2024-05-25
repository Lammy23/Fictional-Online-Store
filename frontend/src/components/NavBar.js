import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="padding">
      <nav className="row" style={{ justifyContent: "center" }}>
        <Link to={"/"}>Home</Link>
        <div style={{ width: "100px" }}></div>
        <Link to={"/products"}>Products</Link>
        <div style={{ width: "100px" }}></div>
        <Link to={"/yt-tutorial"} style={{ color: "white" }}>
          <div className="icon-button" style={{ backgroundColor: "black" }}>
            <FontAwesomeIcon icon={faAt} />
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
