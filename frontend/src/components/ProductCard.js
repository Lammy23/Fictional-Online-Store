import React from "react";
import HeartButton from "./buttons/HeartButton";
import CartButton from "./buttons/CartButton";
import defaultImage from "../images/camera-photo.jpg";

import "../style/Components.css";

const defaultProduct = {
  productName: "not found",
  imiage: defaultImage,
  imageAlt: "product",
};

function ProductCard({ product, width }) {
  const { image, imageAlt, productName } = product || defaultProduct;
  // Image as background
  return (
    <div
      className="product-card"
      style={{ backgroundColor: "grey", width: width }}
    >
      <HeartButton />
      <img src={image} alt={`${imageAlt}`} width={"100%"} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <p>{productName}</p>
        <CartButton />
      </div>
    </div>
  );
}

export default ProductCard;
