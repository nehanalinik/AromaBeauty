import React, { lazy } from "react";
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
      <div className="grid gap-6 place-items-center grid-cols-1 smd:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {BestSellersHelper?.map((item) => {
          let { id, title, price, image } = item;
          return (
            <section key={id} className="grid place-items-center py-8">
              <div className="w-[280px] grid grid-rows-3">
                <div className="w-[280px] h-[210px] mx-auto bg-slate-200 row-span-2">
                  <img
                    src={image}
                    alt={`${image}/${id}`}
                    className="w-full h-full"
                  />
                </div>
                <div className="row-span-1 text-center flex flex-col gap-2">
                  <p className="text-md filterProducts">{title}</p>
                  <p className="text-lg font-bold">${price}</p>
                </div>
              </div>
              <div className="text-center">
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
      </div>
    </div>
  );
};

export default BestSellers;
