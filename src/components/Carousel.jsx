import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const Carousel = () => {
  const splideOptions = {
    type: "loop",
    drag: "free",
    gap: "0.1rem",
    arrows: false,
    keyboard: "global",
    pagination: false,
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: true,
      rewind: true,
      speed: 1,
    },
  };
  return (
    <div>
      <Splide
        options={splideOptions}
        extensions={{ AutoScroll }}
        className="bg-red-400 h-[80vh] grid"
      >
        <SplideSlide className="bg-pink-200">
          <img
            src={slider1}
            alt="slider1"
            className="object-cover"
            loading="lazy"
          />
        </SplideSlide>
        <SplideSlide className="bg-green-200">
          <img
            src={slider2}
            alt="slider2"
            className="object-cover"
            loading="lazy"
          />
        </SplideSlide>
        <SplideSlide className="bg-yellow-200">
          <img
            src={slider3}
            alt="slider3"
            className="object-cover"
            loading="lazy"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
