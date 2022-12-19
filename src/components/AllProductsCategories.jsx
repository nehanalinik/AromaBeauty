import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const AllProductsCategories = ({ categories, filterProducts }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <section>
      <div className=" text-accentYellow uppercase font-medium text-lg">
        Categories
      </div>
      <div className="relative grid grid-cols-2">
        <div className="flex gap-2 md:gap-3 lg:gap-4">
          {categories?.map((category, index) => (
            <button
              key={index}
              onClick={() => filterProducts(category)}
              className="hover:bg-accentBlue hover:text-secondaryWhite capitalize transition-all border border-accentBlue filterProducts px-1 md:px-4"
            >
              {category}
            </button>
          ))}
        </div>
        {/* <div className="grid place-items-end">
          <div className=" flex items-center gap-8 border-b border-accentBlue">
            <p className="uppercase filterProducts">Sort</p>
            <div onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <button className="mb-1 text-accentBlue hover:text-primaryBlue">
                  <AiOutlineMinus fontSize={20} />
                </button>
              ) : (
                <button className="mb-1 text-accentBlue hover:text-primaryBlue">
                  <AiOutlinePlus fontSize={20} />
                </button>
              )}
            </div>
          </div>
          <div className="absolute top-[1.8rem] bg-secondaryWhite text-black rounded-md">
            {toggle && (
              <ul className="py-3">
                <li className="py-1 hover:bg-primary hover:text-secondaryWhite p-3">
                  Price: High to Low
                </li>
                <li className="py-1 hover:bg-primary hover:text-secondaryWhite p-3">
                  Price: Low to High
                </li>
                <li className="py-1 hover:bg-primary hover:text-secondaryWhite p-3">
                  Order: A-Z
                </li>
                <li className="py-1 hover:bg-primary hover:text-secondaryWhite p-3">
                  Order: Z-A
                </li>
              </ul>
            )}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AllProductsCategories;
