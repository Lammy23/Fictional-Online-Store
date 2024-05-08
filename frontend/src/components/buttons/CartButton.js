import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

function CartButton({ viewMode }) {
  const { addToCart } = useCartContext;
  const navigate = useNavigate();
  const viewCart = function () {
    navigate("/cart");
  };

  return (
    <div className="icon" onClick={viewMode ? viewCart : addToCart}>
      <FontAwesomeIcon className="header-icons" icon={faCartShopping} />
    </div>
  );
}

export default CartButton;
