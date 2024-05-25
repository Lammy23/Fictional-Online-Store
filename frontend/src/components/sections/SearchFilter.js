import React from "react";
import ProductCard from "../ProductCard";


function SearchFilter() {
  return (
    <div className="padding">
      <div className="row" style={{justifyContent:"center"}}>
        <div className="grid" >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
