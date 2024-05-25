import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function TutorialPage() {
  return (
    <>
      <Link to={"/"}>
        <div className="normal-button" style={{ width: "250px" }}>
          <div className="row" style={{ justifyContent: "center" }}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <div style={{ width: "15px" }} />
            <p>Back to Store</p>
          </div>
        </div>
      </Link>
      <div className="padding">
        <p>Tutorial from YT coming soon!</p>
      </div>
    </>
  );
}

export default TutorialPage;
