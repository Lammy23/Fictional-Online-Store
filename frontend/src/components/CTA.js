import React from "react";

// Call to Action component
function CTA() {
  return (
    <div
      className="padding"
      style={{ paddingRight: "0px", paddingLeft: "0px" }}
    >
      <div className="bg-colored" style={{ height: "300px" }}>
        <div className="column" style={{ alignItems: "center" }}>
          <h1 style={{ fontWeight: "normal" }}>
            Spacetech 4000 is now 30% off
          </h1>
          <div style={{ height: "50px" }} />
          <button
            className="normal-button"
            style={{ fontSize: "1rem" }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
