import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useScrollPosition } from "../hooks/useScrollPosition";

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const scrollPosition = useScrollPosition();
  const products = useSelector((state) => state.cart.cartItems);
  const [menu, setMenu] = useState(false);
  return (
    <header
      className={classNames(
        scrollPosition > 60
          ? "sticky top-0 w-full z-10 backdrop-blur"
          : "sticky top-0 w-full z-10"
      )}
    >
      <div className="flex justify-between items-center h-[8vh] w-full smd:hidden">
        <div className="relative flex text-secondaryBlack items-center">
          {menu && (
            <div className="fixed p-4 top-[8vh] left-0 border-t-2 border-primaryBlue h-[92vh] w-[100vw] bg-secondaryWhite">
              <ul>
                <li onClick={() => setMenu(!menu)}>
                  <NavLink
                    to="/shop"
                    className="cursor-pointer text-primaryBlue transition-all hover:text-primary"
                  >
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
              <AiOutlineClose
                fontSize={22}
                className="cursor-pointer text-primaryBlue transition-all "
              />
            ) : (
              <AiOutlineMenu
                fontSize={22}
                className="cursor-pointer text-primaryBlue transition-all "
              />
            )}
          </div>
          {/* <div>
            <NavLink className="text-primaryBlue transition-all hover:text-primary">
              <FiSearch fontSize={22} />
            </NavLink>
          </div> */}
        </div>

        <div className="logo text-primaryBlue">
          <NavLink to="/">
            Aroma<span className="text-primary">Beauty</span>
          </NavLink>
        </div>
        <ul className="flex items-center text-secondaryBlack space-x-4">
          {/* <li>
            <NavLink
              to="/user"
              className="text-primaryBlue transition-all hover:text-primary"
            >
              <AiOutlineUser fontSize={22} />
            </NavLink>
          </li> */}
          <li className="pr-4 relative">
            <NavLink
              to="/cart"
              className="text-primaryBlue transition-all hover:text-primary"
            >
              <CgShoppingBag fontSize={22} />

              <div className="absolute bottom-3 left-2 text-secondaryBlack bg-primary font-semibold px-1 rounded-full text-sm">
                {products.length}
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* desktop */}
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
                <NavLink
                  to="/shop"
                  className="cursor-pointer text-primaryBlue transition-all hover:text-primary"
                >
                  Shop
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/our-story" className="cursor-pointer">
                  Our Story
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink className="text-primaryBlue transition-all hover:text-primary">
                  <FiSearch fontSize={22} />
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/user"
                  className="text-primaryBlue transition-all hover:text-primary"
                >
                  <AiOutlineUser fontSize={22} />
                </NavLink>
              </li> */}
              <li className="relative">
                <NavLink
                  to="/cart"
                  className="text-primaryBlue transition-all hover:text-primary"
                >
                  <CgShoppingBag fontSize={22} />
                  <div className="absolute bottom-3 left-2 text-secondaryBlack bg-primary font-semibold px-1 rounded-full text-sm">
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
