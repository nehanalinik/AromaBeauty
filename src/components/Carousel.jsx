import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    adaptiveHeight: true,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="relative">
          <img
            src={slider1}
            alt="slider1"
            className="w-[100vw] h-[80vh] object-cover"
            loading="lazy"
          />
          <div className="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="secondaryBtn">Shop Now</div>
          </div>
        </div>
        <img
          src={slider2}
          alt="slider2"
          className="w-[100vw] h-[80vh] object-cover"
          loading="lazy"
        />
        <img
          src={slider3}
          alt="slider3"
          className="w-[100vw] h-[80vh] object-cover"
          loading="lazy"
        />
      </Slider>
    </div>
  );
};

export default Carousel;
