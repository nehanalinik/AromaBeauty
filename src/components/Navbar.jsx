import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.cartItems);
  const [menu, setMenu] = useState(false);
  return (
    <header className="h-full">
      <div className="flex justify-between items-center h-[8vh] w-full smd:hidden">
        <div className="relative flex text-secondaryBlack items-center">
          {menu && (
            <div className="absolute p-4 top-[5.65vh] left-0 bg-lightPrimary h-[92vh] w-[100vw] z-10">
              <ul>
                <li onClick={() => setMenu(!menu)}>
                  <Link to="/shop">Shop</Link>
                </li>
                <li onClick={() => setMenu(!menu)}>
                  <Link to="/our-story">Our Story</Link>
                </li>
              </ul>
            </div>
          )}

          <div onClick={() => setMenu(!menu)} className="px-4">
            {menu ? (
              <AiOutlineClose fontSize={22} />
            ) : (
              <AiOutlineMenu fontSize={22} />
            )}
          </div>
          <div>
            <FiSearch fontSize={22} />
          </div>
        </div>
        <div className="logo">
          <Link to="/">AromaBeauty</Link>
        </div>
        <ul className="flex items-center text-secondaryBlack space-x-4">
          <li>
            <Link to="/user">
              <AiOutlineUser fontSize={22} />
            </Link>
          </li>
          <li className="pr-4 relative">
            <Link to="/cart">
              <CgShoppingBag fontSize={22} />

              <div className="absolute bottom-3 left-2 bg-secondaryBlack text-primary font-semibold px-1 rounded-full text-sm">
                {products.length}
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden smd:flex">
        <div className="max-w-[1240px] mx-auto h-[8vh] px-4 w-full flex items-center justify-between">
          <div className="logo">
            <Link to="/">AromaBeauty</Link>
          </div>
          <div>
            <ul className="text-secondaryBlack flex items-center space-x-4">
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/our-story">Our Story</Link>
              </li>
              <li>
                <Link to="/">
                  <FiSearch fontSize={22} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiOutlineUser fontSize={22} />
                </Link>
              </li>
              <li className="relative">
                <Link to="/cart">
                  <CgShoppingBag fontSize={22} />
                  <div className="absolute bottom-3 left-2 bg-secondaryBlack text-primary font-semibold px-1 rounded-full text-sm">
                    {products.length}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
