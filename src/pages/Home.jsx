import React from "react";
import BestSellers from "../components/BestSellers";
import Carousel from "../components/Carousel";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <>
      <div className="my-8">
        <NewArrivals />
      </div>
      <BestSellers />
      {/* <Carousel /> */}
    </>
  );
};

export default Home;
