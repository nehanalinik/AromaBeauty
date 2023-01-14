import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import EmptyBag from "../components/EmptyBag";
import NewArrivals from "../components/NewArrivals";
import {
  increaseItemsQty,
  removeItemsFromCart,
  decreaseCartQty,
  getTotals,
} from "../store/cartSlice";
const Cart = () => {
  const [toggle, setToggle] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const totalQty = useSelector((state) => state.cart.cartTotalQuantity);
  const shipping = useSelector((state) => state.cart.cartShipping);
  const discount = useSelector((state) => state.cart.cartDiscount);
  const savings = useSelector((state) => state.cart.cartSavings);
  const grandTotal = useSelector((state) => state.cart.cartGrandTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const removeItem = (item) => {
    dispatch(removeItemsFromCart(item));
  };
  const increaseItem = (item) => {
    dispatch(increaseItemsQty(item));
  };
  const decreaseItem = (item) => {
    dispatch(decreaseCartQty(item));
  };
  return (
    <div className="max-w-[1240px] mx-auto">
      {cartItems.length === 0 ? (
        <EmptyBag />
      ) : (
        <div className="grid p-4 gap-y-8 md:grid-cols-3 md:gap-x-4">
          <div className="md:col-span-2 md:border-r md:border-slate-400">
            <div className="title">
              <p>Your Bag</p>
            </div>
            <div className="grid gap-4">
              {cartItems.map((product) => {
                const { image, title, price, cartQuantity } = product;
                return (
                  <div key={title}>
                    <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-8 px-2 md:px-4 my-6 md:my-8">
                      <div className="col-span-1 flex flex-col space-y-4">
                        <div>
                          <img src={image} alt="prod1" />
                        </div>
                        <div className="grid grid-cols-3 py-1 place-items-center rounded-sm border border-secondaryBlack">
                          <div
                            onClick={() => decreaseItem(product)}
                            className="hover:text-accentBlueDark cursor-pointer"
                          >
                            <AiOutlineMinus fontSize={20} />
                          </div>
                          <div className="border-x border-secondaryBlack px-3 smd:px-4 md:px-5 lg:px-8">
                            {cartQuantity}
                          </div>
                          <div
                            className="hover:text-accentBlueDark cursor-pointer"
                            onClick={() => increaseItem(product)}
                          >
                            <AiOutlinePlus fontSize={20} />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 flex flex-col space-y-4 md:justify-between">
                        <div className="flex justify-between">
                          <div className="text-md md:text-lg">{title}</div>
                          <div className="font-bold text-xl text-secondaryBlack">
                            ${price * cartQuantity}
                          </div>
                        </div>
                        <div className="md:pb-8 pl-2">
                          <button
                            onClick={() => removeItem(product)}
                            className="primaryRedBtn"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-slate-400"></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="p-2 md:p-3">
              <div className="text-[20px] font-bold pb-4">
                SUBTOTAL({totalQty})
              </div>
              <div
                className={
                  toggle
                    ? "flex items-center justify-between"
                    : "flex items-center justify-between border-b border-slate-400 p-2"
                }
              >
                <p className="uppercase text-slate-400">Add Promocode</p>
                <div onClick={() => setToggle(!toggle)}>
                  {toggle ? (
                    <button>
                      <AiOutlineMinus fontSize={22} />
                    </button>
                  ) : (
                    <button>
                      <AiOutlinePlus fontSize={22} />
                    </button>
                  )}
                </div>
              </div>
              {toggle && (
                <div className="flex justify-between items-center border-b border-slate-400 pb-2">
                  <div className="flex justify-between border border-slate-400 mt-2 p-1">
                    <input
                      type="text"
                      placeholder="Promocode here"
                      className="uppercase focus:none outline-none bg-transparent"
                    />
                    <FaCheckCircle
                      fontSize={22}
                      className="hidden mr-2 text-green-800"
                    />
                  </div>
                  <button className="border-black border bg-black text-secondaryWhite px-2 md:px-6 py-1 ml-1 md:ml-0 mt-2">
                    Remove
                  </button>
                </div>
              )}

              <div className="my-6 flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <p className="uppercase font-semibold text-sm md:text-base text-slate-700">
                    Subtotal
                  </p>
                  <p className="text-slate-400 text-md">${totalAmount}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="uppercase font-semibold text-sm md:text-base text-slate-700">
                    Shipping costs
                  </p>
                  <p className="text-slate-400 text-md">+${shipping}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="uppercase font-semibold text-sm md:text-base text-slate-700">
                    Order Discount
                  </p>
                  <p className="text-slate-400 text-md">-{discount}%</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="uppercase font-semibold text-sm md:text-base text-slate-700">
                    Your Savings
                  </p>
                  <p className="text-slate-400 text-md">${savings}</p>
                </div>
              </div>
              <div className="border-b border-slate-400"></div>
              <div className="my-4">
                <div className="flex items-center justify-between">
                  <p className="uppercase font-semibold text-md md:text-lg">
                    Grand Total
                  </p>
                  <p className="text-slate-800 text-xl font-bold">
                    ${grandTotal}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="secondaryBtn uppercase text-center w-full font-bold bg-primaryBlue hover:bg-primary">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-8 p-6">
        <p className="subtitle text-xl">
          You might wanna add this in your cart.
        </p>
      </div>
      <NewArrivals />
    </div>
  );
};

export default Cart;
