/** @format */

import React from "react";
import Banner from "../../component/Banner";
import BestSellingProduct from "../../component/BestSelingProduct";
import Carousel from "../../component/Carousel";
import Cart from "../../component/cart";
import Footer from "../../component/Footor";
import Header from "../../component/header";
import Nav from "../../component/NavigationBar";

const Dasboard = () => {
  return (
    <>
      <Header />
      <Nav />
      <Banner />
      {/* <Cart /> */}
      <BestSellingProduct />
      <Carousel />
      <Footer />
    </>
  );
};

export default Dasboard;
