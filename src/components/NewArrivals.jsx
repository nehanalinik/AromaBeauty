import React from "react";
import NewArrivalsHelper from "../helper/NewArrivalsHelper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../store/cartSlice";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItemsToCart(item));
  };
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    adaptiveHeight: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "5px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="max-w-[1240px] mx-auto px-4 my-16">
      <div className="title my-8">New Arrivals</div>
      <Slider {...settings}>
        {NewArrivalsHelper?.map((item) => {
          let { id, image, title, price } = item;
          return (
            <section key={id} className="grid place-items-center py-8">
              <div className="w-[280px]">
                <div className="w-[280px] h-[210px] mx-auto bg-slate-200">
                  <img
                    src={image}
                    alt={`${image}/${id}`}
                    className="w-full h-full"
                  />
                </div>
                <div className="text-center flex flex-col gap-2">
                  <p className="text-md filterProducts">{title}</p>
                  <p className="text-lg font-bold">${price}</p>
                </div>
              </div>
              <div className="text-center mt-4">
                <button
                  className="secondaryBtn py-0.5"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </section>
          );
        })}
      </Slider>
    </div>
  );
};

export default NewArrivals;
