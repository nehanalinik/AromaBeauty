import React from "react";
import { useState } from "react";
import AllProducts from "../components/AllProducts";
import AllProductsCategories from "../components/AllProductsCategories";
import AllProductsHelper from "../helper/AllProductsHelper";

// Get only unique categories
const allCategories = [
  "all",
  ...new Set(AllProductsHelper.map((item) => item.category)),
];
console.log(allCategories);
const Shop = () => {
  const [products, setProducts] = useState(AllProductsHelper);
  const [categories, setCategories] = useState(allCategories);

  const filterProducts = (category) => {
    if (category === "all") {
      setProducts(AllProductsHelper);
      return;
    }
    const newProducts = AllProductsHelper.filter(
      (product) => product.category === category
    );
    setProducts(newProducts);
  };
  return (
    <section className=" max-w-[1240px] mx-auto p-2 my-6">
      <div>
        <div className="title">Browse All Products</div>
        <div className="my-2">
          <p className="subtitle">
            We'll get you that "whoa, nice skin!" effect.
          </p>
        </div>
      </div>
      <div className="my-6 grid gap-2">
        <AllProductsCategories
          categories={categories}
          filterProducts={filterProducts}
        />
      </div>
      <div>
        <AllProducts products={products} />
      </div>
    </section>
  );
};

export default Shop;
