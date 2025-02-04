import React, { useEffect } from "react";
import NetflixLogo from "../assets/Netflix_Logo_RGB.png";
import logout from "../assets/logout.png";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout Error: ", error);
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="fixed top-0 w-full px-8 py-3 bg-gradient-to-b from-black to-transparent z-50 flex justify-between items-center">
      <img className="w-40 cursor-pointer" src={NetflixLogo} alt="Netflix Logo" />
      {user && (
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 px-4 py-2 text-white rounded-lg hover:bg-red-700 transition-all"
          >
            <img className="w-6 h-6" src={logout} alt="Logout" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
