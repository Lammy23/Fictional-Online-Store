import React from "react";
import Header from "../sections/Header";
import NavBar from "../sections/NavBar";
import CTA from "../sections/CTA";
import Accolades from "../sections/Accolades";
import Footer from "../sections/Footer";
import Carousel from "../sections/Carousel";

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
