import React from "react";
import NetflixLogo from "../assets/Netflix_Logo_RGB.png";
import logout from "../assets/logout.png";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <div className="flex justify-between items-center">
        <img
          className="w-44 cursor-pointer"
          src={NetflixLogo}
          alt="Netflix Logo"
        />
        {user && (
          <div className="flex items-center gap-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 px-3 py-1.5   text-white rounded hover:bg-red-700 transition"
            >
              <img className="w-6 h-6" src={logout} alt="Logout" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
