import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"; // ✅ Import the reducer

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer, 
  },
});

export default appStore;
