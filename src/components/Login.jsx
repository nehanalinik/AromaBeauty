import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="text-center my-8">
      <div className="py-3">
        <h1 className="text-[2rem]">Login</h1>
      </div>
      <div>
        <form className="flex flex-col items-center justify-center gap-6">
          <div className="p-1 border-b border-primary w-[350px] flex">
            <input
              type="email"
              placeholder="Email"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1  border-b border-primary w-[350px] flex">
            <input
              type="password"
              placeholder="Password"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-primary secondaryBtn uppercase my-5"
          >
            Login
          </button>
        </form>
        <div>
          New Here?{" "}
          <Link to="/register" className="primaryBtn">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
