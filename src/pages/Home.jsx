import React from "react";
import BestSellers from "../components/BestSellers";
import Carousel from "../components/Carousel";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <>
      <NewArrivals />
      <BestSellers />
      {/* <Carousel /> */}
    </>
  );
};

export default Home;
