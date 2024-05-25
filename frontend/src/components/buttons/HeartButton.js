import { faHeart as notLiked } from "@fortawesome/free-regular-svg-icons";
import { faHeart as Liked } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function HeartButton() {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked((prev) => !prev);
  }

  return liked ? (
    <FontAwesomeIcon icon={Liked} onClick={handleLike} />
  ) : (
    <FontAwesomeIcon icon={notLiked} onClick={handleLike} />
  );
}

export default HeartButton;
