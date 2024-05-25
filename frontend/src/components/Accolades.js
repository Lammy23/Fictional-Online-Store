import React from "react";

function Accolades() {
  return (
    <div
      className="padding"
      style={{ paddingRight: "0px", paddingLeft: "0px" }}
    >
      <div className="bg-colored" style={{ padding: "15px" }}>
        <div className="row" style={{ justifyContent: "space-around" }}>
          <p>Reliable</p>
          <div style={{ borderRight: "2px solid grey", height: "50px" }}></div>
          <p>24/7 Support</p>
          <div style={{ borderRight: "2px solid grey", height: "50px" }}></div>
          <p>4.9/5</p>
        </div>
      </div>
    </div>
  );
}

export default Accolades;
