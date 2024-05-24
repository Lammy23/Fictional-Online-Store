import React, { useState } from "react";

function toggleAnimationState(animationState, setAnimationState) {
  if (animationState === "paused") setAnimationState("running");
  else if (animationState === "running") setAnimationState("paused");
}

function handleAnimation(animationState, setAnimationState) {
  toggleAnimationState(animationState, setAnimationState);
}

function ProductCard({key}) {
  const [animationState, setAnimationState] = useState("paused");
  return (
    <div
      className="product-card"
      style={{ animationPlayState: animationState }}
      onClick={() => handleAnimation(animationState, setAnimationState)}
    >
      <p>Product card here!</p>
    </div>
  );
}

export default ProductCard;
