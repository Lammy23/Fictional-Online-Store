import React from "react";
import Header from "../sections/Header";
import NavBar from "../sections/NavBar";
import SearchFilter from "../sections/SearchFilter";

function ProductsPage() {
  return (
    <div className="margin">
      <Header />
      <NavBar />
      <SearchFilter />
    </div>
  );
}

export default ProductsPage;
