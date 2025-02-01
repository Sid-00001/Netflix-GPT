import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className=" w-full h-screen bg-black">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          alt="Bg_img"
        />
        <div className="flex justify-center items-center h-full">
          <form className="relative  text-white p-10 rounded-lg w-96 shadow-lg bg-black/70 h-120">
            <h1 className="text-3xl font-bold mb-6 ">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (<input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
            />)}
            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
            />
            <button className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded font-bold">
              {isSignInForm ? "Login" : "Sign Up"}
            </button>

            <p
              className="mt-4 text-center p-5  cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix?    Sign Up Now"
                : "Already a user! Login Now"}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
