import React from "react";
import Header from "../sections/Header";

/*Styling*/
import "../../style/pages/HomePage.css";

function HomePage() {
  return (
    <div>
      <Header />
      <h1 className="home-call-to-action">
        Best tech in the whole tri-state area.
      </h1>
      {/* <Carousel breakPoints={breakPoints}>
        <Item>One</Item>
        <Item>Two</Item>
      </Carousel> */}
    </div>
  );
}

export default HomePage;
