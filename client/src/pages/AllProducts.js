import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";


const AllProducts = () => {
  return (
    <div className="container">
      <Cart />
      <CategoryMenu />
      <ProductList />
      
    </div>
  );
};

export default AllProducts;
