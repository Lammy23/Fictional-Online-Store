import React from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import CTA from "../CTA";
import Accolades from "../Accolades";
import Footer from "../Footer";
import Carousel from "../Carousel";

function HomePage() {
  return (
    <>
      <Header />
      <NavBar />
      <CTA />
      <div className="padding">
        <div className="row" style={{ justifyContent: "center" }}>
          <h2>Featured</h2>
        </div>
      </div>
      <Carousel />
      <Accolades />
      <div className="padding">
        <div className="row" style={{ justifyContent: "center" }}>
          <h2>On Sale</h2>
        </div>
      </div>
      <Carousel />
      <Footer />
    </>
  );
}

export default HomePage;
