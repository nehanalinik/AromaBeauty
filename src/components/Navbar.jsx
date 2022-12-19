import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { useSelector } from "react-redux";
// import Search from "./Search";

const Navbar = () => {
  const products = useSelector((state) => state.cart.cartItems);
  const [menu, setMenu] = useState(false);
  // const handleClick = () => {
  //   setMenu(!menu);
  // };
  return (
    <header className="h-full">
      <div className="flex justify-between items-center h-[8vh] w-full smd:hidden">
        <div className="relative flex text-secondaryBlack items-center">
          {menu && (
            <div className="absolute p-4 top-[5.65vh] left-0 bg-primary h-[92vh] w-[100vw] z-10">
              <ul>
                <li onClick={() => setMenu(!menu)}>
                  <NavLink to="/shop" className="cursor-pointer">
                    Shop
                  </NavLink>
                </li>
                {/* <li onClick={() => setMenu(!menu)}>
                  <NavLink to="/our-story" className="cursor-pointer">
                    Our Story
                  </NavLink>
                </li> */}
              </ul>
            </div>
          )}

          <div onClick={() => setMenu(!menu)} className="px-4">
            {menu ? (
              <AiOutlineClose fontSize={22} className="cursor-pointer" />
            ) : (
              <AiOutlineMenu fontSize={22} className="cursor-pointer" />
            )}
          </div>
          <div>
            <FiSearch fontSize={22} />
          </div>
        </div>

        <div className="logo text-primaryBlue">
          <NavLink to="/">
            Aroma<span className="text-primary">Beauty</span>
          </NavLink>
        </div>
        <ul className="flex items-center text-secondaryBlack space-x-4">
          <li>
            <NavLink to="/user">
              <AiOutlineUser fontSize={22} />
            </NavLink>
          </li>
          <li className="pr-4 relative">
            <NavLink to="/cart">
              <CgShoppingBag fontSize={22} />

              <div className="absolute bottom-3 left-2 bg-secondaryBlack text-primary font-semibold px-1 rounded-full text-sm">
                {products.length}
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hidden smd:flex">
        <div className="max-w-[1240px] mx-auto h-[8vh] px-4 w-full flex items-center justify-between">
          <div className="logo text-primaryBlue">
            <NavLink to="/">
              Aroma<span className="text-primary">Beauty</span>
            </NavLink>
          </div>
          <div>
            <ul className="text-secondaryBlack flex items-center space-x-4">
              <li>
                <NavLink to="/shop" className="cursor-pointer">
                  Shop
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/our-story" className="cursor-pointer">
                  Our Story
                </NavLink>
              </li> */}
              <li>
                <NavLink>
                  <FiSearch fontSize={22} />
                </NavLink>
                {/* {menu && <Search handleClick={handleClick} />} */}
              </li>
              <li>
                <NavLink to="/user">
                  <AiOutlineUser fontSize={22} />
                </NavLink>
              </li>
              <li className="relative">
                <NavLink to="/cart">
                  <CgShoppingBag fontSize={22} />
                  <div className="absolute bottom-3 left-2 bg-secondaryBlack text-primary font-semibold px-1 rounded-full text-sm">
                    {products.length}
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
