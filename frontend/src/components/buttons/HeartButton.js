import { faHeart as faHeartLiked } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartUnliked } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

function HeartButton({ wishlisted, viewMode, toggleWishlisted }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false); // False by default

  const viewWishlisted = () => {
    // Goto wishlisted products
    navigate("/wishlisted");
  };

  const toggleLiked = () => {
    // toggleWishlisted();
    setLiked((prevState) => !prevState);
  }

  useState(() => {
    // Assuming parent component has complete product object with user's special status for whether it's wishlisted or not
    setLiked(wishlisted);
  }, []);

  return (
    <div className="icon" onClick={viewMode ? viewWishlisted : toggleLiked}>
      {liked || viewMode ? (
        <FontAwesomeIcon icon={faHeartLiked} />
      ) : (
        <FontAwesomeIcon icon={faHeartUnliked} />
      )}
    </div>
  );
}

export default HeartButton;
