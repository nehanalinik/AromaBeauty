import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import AllProductsHelper from "../helper/AllProductsHelper";

const Search = ({ handleClick }) => {
  const [search, setSearch] = useState("");
  return (
    <section className="fixed inset-0 bg-secondaryWhite bg-opacity-50 backdrop-blur z-10">
      <div className="m-8 p-4 bg-primaryBlue rounded-full">
        <form>
          <div className="flex justify-between">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search..."
              value={search}
              className="text-secondaryWhite placeholder-white w-full bg-transparent focus:outline-none"
            />
            <button className="cursor-pointer" onClick={handleClick()}>
              <AiOutlineClose className="text-secondaryWhite" fontSize={22} />
            </button>
          </div>
        </form>
      </div>
      {search && (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4 p-2 max-w-[1240px] mx-auto">
          {AllProductsHelper.filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          }).map((product, i) => (
            <div key={i} className="grid gap-4 place-items-center">
              <div className="cursor-pointer hover:scale-110 transition ease-all">
                <div className="w-[160px] smd:w-[180px] md:w-[200px]">
                  <img src={product.image} alt="img" />
                </div>
                <div className="w-[160px] smd:w[180px] md:w-[200px] filterProducts">
                  {product.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Search;
