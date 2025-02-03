import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = async () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        
        await updateProfile(user, {  
          displayName: name.current.value,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        });

        // Dispatch user to Redux store
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
        );

        navigate("/browse");
      } catch (error) {
        setErrorMessage(error.code + " " + error.message);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;

        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );

        navigate("/browse");
      } catch (error) {
        setErrorMessage(error.code + " " + error.message);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen bg-black">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          alt="Bg_img"
        />
        <div className="flex justify-center items-center h-full">
          <form
            className="relative text-white p-10 rounded-lg w-96 shadow-lg bg-black/70 h-120"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-3xl font-bold mb-6 ">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-800 rounded text-white focus:outline-none"
            />
            {errorMessage && (
              <p className="text-red-500 p-2 mb-4 text-center">{errorMessage}</p>
            )}
            <button
              className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded font-bold"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Login" : "Sign Up"}
            </button>

            <p
              className="mt-4 text-center p-5 cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already a user! Login Now"}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
