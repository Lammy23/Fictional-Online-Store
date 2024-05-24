import React from "react";
import ProductCard from "./ProductCard";

/**
 * Returns a list of numbers from `start` to `end - 1`
 * @param {Number} start
 * @param {Number} end
 */
function range(start, end) {
  if (!end) {
    // Accounting for single number parameters
    end = start + 1;
    start = 0;
  }
  var result = [];
  var num = start;
  while (++num < end) {
    result.push(num);
  }
  return result;
}

function Carousel({ productCards }) {
  // DEBUG
  productCards = productCards
    ? productCards
    : range(10).map((num) => <ProductCard key={num}/>);
  return (
    <div className="carousel">
      <div className="mover">{productCards}</div>
    </div>
  );
}

export default Carousel;
