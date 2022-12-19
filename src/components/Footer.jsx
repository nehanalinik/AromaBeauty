import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="bg-secondaryBlack text-secondaryWhite mt-16">
      <div className="max-w-[1240px] mx-auto p-2 grid gap-12 pt-16 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-10">
          <div className="flex flex-col gap-5">
            <div className="logo text-primaryBlue">
              <Link to="/">
                Aroma<span className="text-primary">Beauty</span>
              </Link>
            </div>
            <div className="flex flex-col gap-4 text-slate-300">
              <p className="leading-7 w-[280px] smd:w-[440px] md:w-[590px] lg:w-full">
                Aroma Beauty is a simple, effective range of skin essentials
                based on best-in-class botanical ingredients. Our products are
                formulated in-house to be as effective as possible, while being
                as gentle as possible. We want even the most sensitive skin to
                be healthy, happy and calm.
              </p>
              <div>
                Wanna give a review or suggest something? Write us on:
                <br />
                aromabeautysuggestions@gmail.com
              </div>
            </div>
          </div>
          <div className="grid gap-x-2 gap-y-4 grid-cols-1 smd:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col gap-1">
              <div className="uppercase text-primary font-medium">Shop</div>
              <ul className="text-slate-400 flex flex-col gap-1">
                <li className="hover:text-slate-200 hover:underline transform-all ease-out text-base">
                  Face Care
                </li>
                <li className="hover:text-slate-200 hover:underline transform-all ease-out text-base">
                  Body Care
                </li>
                <li className="hover:text-slate-200 hover:underline transform-all ease-out text-base">
                  Hair Care
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <div className="uppercase text-primary font-medium">Services</div>
              <ul className="text-slate-400 flex flex-col gap-1">
                <li className="hover:text-slate-200 hover:underline transform-all ease-out text-base">
                  Contact Us
                </li>
                <li className="hover:text-slate-200 hover:underline transform-all ease-out text-base">
                  Shipping & Returns
                </li>
                <li className="hover:text-slate-200 hover:underline transform-all ease-out text-base">
                  FAQ's
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <div className="uppercase text-primary font-medium">Company</div>
              <ul className="text-slate-400 flex flex-col gap-1">
                <li className="hover:text-slate-200 hover:underline transform-all ease-out text-base">
                  About Us
                </li>
                <li className="hover:text-slate-200 hover:underline transform-all ease-out text-base">
                  Sustainability
                </li>
                <li className="hover:text-slate-200 hover:underline transform-all ease-out text-base">
                  Store Locator
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid py-6 text-center gap-12">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-[20px]">Follows us on</h2>
            <div className="text-accentYellow flex gap-4">
              <FiInstagram
                size={24}
                className="cursor-pointer hover:text-secondaryWhite"
              />
              <FiFacebook
                size={24}
                className="cursor-pointer hover:text-secondaryWhite"
              />
              <FiTwitter
                size={24}
                className="cursor-pointer hover:text-secondaryWhite"
              />
              <FiYoutube
                size={24}
                className="cursor-pointer hover:text-secondaryWhite"
              />
            </div>
          </div>
          <div>
            <p className="text-primary">
              © 2022 Aroma Beauty All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
