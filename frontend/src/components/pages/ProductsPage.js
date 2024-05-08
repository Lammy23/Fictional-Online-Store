import React from "react";
import Header from "../Header";

function ProductsPage({type}) {
  return (
    <div>
      <Header />
      <div>{type}</div>
    </div>
  );
}

export default ProductsPage;
