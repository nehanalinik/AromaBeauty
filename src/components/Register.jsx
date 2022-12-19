import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="text-center my-6">
      <div className="py-4">
        <h1 className="text-[2rem]">New Account</h1>
      </div>
      <div className="my-4">
        <form className="flex flex-col items-center justify-center gap-6">
          <div className="p-1 border-b border-primary w-[350px] flex">
            <input
              type="text"
              placeholder="Your Name"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1 border-b border-primary w-[350px] flex">
            <input
              type="number"
              placeholder="Your Mobile"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1 border-b border-primary w-[350px] flex">
            <input
              type="email"
              placeholder="Your Email"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1  border-b border-primary w-[350px] flex">
            <input
              type="password"
              placeholder="Create Password"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1  border-b border-primary w-[350px] flex">
            <input
              type="password"
              placeholder="Repeate Password"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1  border-b border-primary w-[350px] flex">
            <textarea
              type="text"
              placeholder="Your Address"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-primary secondaryBtn uppercase mt-5"
          >
            Register
          </button>
        </form>
        <div className="mt-6">
          Already Registered?{" "}
          <Link to="/login" className="primaryBtn">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
