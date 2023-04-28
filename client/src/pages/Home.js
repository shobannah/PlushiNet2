import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import MainImage from "../components/MainImage";
import Carousel from "../components/Carousel";


const Home = () => {
  return (
    <div className="container">
      <Cart/>
      <MainImage/>
      <Carousel/>
      
    </div>
  );
};

export default Home;
