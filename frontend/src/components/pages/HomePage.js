import React from "react";
import Header from "../Header";

/*Styling*/
import "../../style/Components.css";
import Carousel from "../Carousel";
import { featuredProducts } from "../../data/products";

function HomePage() {
  return (
    <div>
      <Header />
      <h1 className="home-call-to-action">
        Best tech in the whole tri-state area.
      </h1>
      <Carousel featuredProducts={featuredProducts}/>
    </div>
  );
}

export default HomePage;
