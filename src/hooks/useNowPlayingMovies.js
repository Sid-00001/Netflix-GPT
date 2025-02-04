import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice"; // ✅ Correct import
import API_OPTIONS from "../utils/constants";
import { useEffect } from "react";


const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await response.json();
  
    dispatch(addNowPlayingMovies(json.results)); // ✅ Dispatch action correctly
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [dispatch]); // ✅ Include dispatch in dependency array
};

export default useNowPlayingMovies;