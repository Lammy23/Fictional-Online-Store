import React from "react";
import LaptopSketch from "./svg/LaptopSketch";
import HeartButton from "./buttons/HeartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

function ProductCard({ key }) {
  return (
    <div
      className="outline-button"
      style={{ backgroundColor: "white", width: "300px", height: "300px" }}
    >
      <div style={{ position: "absolute", top: "50px" }}>
        <LaptopSketch />
      </div>
      <div style={{ position: "absolute", top: "15px", right: "15px" }}>
        <HeartButton />
      </div>
      <div
        style={{
          borderTop: "2px solid",
          borderTopColor: "inherit",
          position: "absolute",
          bottom: "15px",
          padding: "15px",
          width: "100%",
        }}
      >
        <div className="row" style={{ flexDirection: "space-between" }}>
          <div className="column">
            <p>Spacetech 4000</p>
            <div style={{ height: "10px" }} />
            <p>$4,4950</p>
          </div>
          <FontAwesomeIcon icon={faShoppingBag} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
