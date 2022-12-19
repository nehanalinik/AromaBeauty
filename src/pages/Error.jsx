import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 text-secondaryBlack flex flex-col items-center justify-center h-[100vh] space-y-2">
      <h3 className="text-3xl text-primary mb-2">Page Not Found!</h3>
      <p className="text-lg text-center pb-8 ">
        Oh! no, Itseem's you have tried opening the page that didn't exist or is
        in under-construction
      </p>
      <Link to="/" className="primaryBtn">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
