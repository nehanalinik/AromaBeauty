import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    repeatPassword: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const { name, phone, email, password, repeatPassword, address } = user;
    if (
      name &&
      phone &&
      email &&
      password &&
      address &&
      password === repeatPassword
    ) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("invalid values");
    }
  };
  return (
    <div className="text-center my-6">
      <div className="py-4">
        <h1 className="text-[2rem]">New Account</h1>
      </div>
      <div className="my-4">
        <form className=" flex flex-col items-center justify-center gap-6">
          <div className="p-1 border border-primary w-[350px] flex flex-col">
            <label htmlFor="name" className=" text-start">
              Your Name
            </label>
            <input
              name="name"
              value={user.name}
              type="text"
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="off"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1 border-b border-primary w-[350px] flex">
            <input
              name="phone"
              value={user.phone}
              type="number"
              onChange={handleChange}
              placeholder="Your Mobile"
              autoComplete="off"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1 border-b border-primary w-[350px] flex">
            <input
              name="email"
              value={user.email}
              type="email"
              onChange={handleChange}
              placeholder="Your Email"
              autoComplete="off"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1  border-b border-primary w-[350px] flex">
            <input
              name="password"
              value={user.password}
              type="password"
              onChange={handleChange}
              placeholder="Create Password"
              autoComplete="off"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1  border-b border-primary w-[350px] flex">
            <input
              name="repeatPassword"
              value={user.repeatPassword}
              type="password"
              onChange={handleChange}
              placeholder="Repeate Password"
              autoComplete="off"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <div className="p-1  border-b border-primary w-[350px] flex">
            <textarea
              name="address"
              value={user.address}
              type="text"
              onChange={handleChange}
              placeholder="Your Address"
              autoComplete="off"
              className="focus:outline-none bg-transparent w-full"
            />
          </div>
          <button
            onClick={handleRegister}
            type="submit"
            className="bg-primary secondaryBtn uppercase mt-5"
          >
            Register
          </button>
        </form>
        <div className="mt-6">
          Already Registered?{" "}
          <span
            onClick={() => navigate("/login")}
            className="primaryBtn cursor-pointer"
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const validateSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Mobile number is required"),
  email: yup.string().email("invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Repeat password is required"),
  address: yup.string().required("Address is required"),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
  phone: "",
  address: "",
};

export default Register;
