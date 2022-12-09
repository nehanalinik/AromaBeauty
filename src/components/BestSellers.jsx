import React from "react";
import BestSellersHelper from "../helper/BestSellersHelper";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../store/cartSlice";

const BestSellers = () => {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItemsToCart(item));
  };
  return (
    <div className="max-w-[1240px] mx-auto px-4 my-8">
      <div className="title my-8">Best Sellers</div>
      <div className="grid gap-6 place-items-center grid-cols-1 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {BestSellersHelper.map((item) => {
          let { id, title, price, image } = item;
          return (
            <div key={title} className="flex flex-col items-center w-full">
              <img src={image} alt={title} loading="lazy" />
              <p className="text-md my-2 text-center">{title}</p>
              <p className="text-lg font-bold mb-1">${price}</p>
              <button className="primaryBtn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
