import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";

import NewArrivalsHelper from "../helper/NewArrivalsHelper";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../store/cartSlice";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItemsToCart(item));
  };
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    drag: "free",
    gap: "2rem",
    padding: "2rem",
    arrows: false,
    keyboard: "global",
    pagination: false,
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: true,
      rewind: true,
      speed: 0.7,
    },
    breakpoints: {
      1024: { perPage: 3 },
      840: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <div className="title my-8">New Arrivals</div>
      <div>
        <Splide options={splideOptions} extensions={{ AutoScroll }}>
          {NewArrivalsHelper?.map((item) => {
            let { id, image, title, price } = item;
            return (
              <SplideSlide
                key={id}
                className="grid grid-rows-2 pb-2 my-4 hover:scale-110 transition-all"
              >
                <div className="row-span-1">
                  <img
                    src={image}
                    alt={`${image}/${id}`}
                    className="w-full h-full"
                  />
                </div>
                <div className="row-span-1 text-center flex flex-col gap-2">
                  <p className="text-sm md:text-base filterProducts">{title}</p>
                  <p className="text-lg font-bold">${price}</p>
                  <div className="text-center">
                    <button
                      onClick={() => addToCart(item)}
                      className="secondaryBtn py-0.5"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default NewArrivals;
