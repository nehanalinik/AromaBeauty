import React from "react";
import { Link } from "react-router-dom";

const EmptyBag = () => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center space-y-4">
      <h3 className="text-xl filterProducts">Nothing in your bag right now</h3>
      <p className="pb-6 text-lg">Shop to add items in your bag</p>
      <div>
        <Link to="/shop" className="primaryBtn">
          continue shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyBag;
