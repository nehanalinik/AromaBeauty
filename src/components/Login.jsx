import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/user");
    });
  };
  return (
    <div className="text-center my-8">
      <div className="py-3">
        <h1 className="text-[2rem]">Login</h1>
      </div>
      <div>
        <form className="flex flex-col items-center justify-center gap-6">
          <div className="p-1 border-b border-primary w-[350px] flex">
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              autoComplete="off"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1  border-b border-primary w-[350px] flex">
            <input
              name="password"
              value={user.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              autoComplete="off"
              className="focus:outline-none bg-transparent w-full"
            />
            
          </div>
          <button
            onClick={handleLogin}
            type="submit"
            className="bg-primary secondaryBtn uppercase my-5"
          >
            Login
          </button>
        </form>
        <div>
          New Here?{" "}
          <span onClick={() => navigate("/register")} className="primaryBtn cursor-pointer">
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
