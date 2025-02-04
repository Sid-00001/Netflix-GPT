import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";
import { IMG_CDN_URL } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const trailerData = useSelector((store) => store.movies.trailerVideo);
  const poster_path = useSelector(
    (store) => store?.movies?.nowPlayingMovies[2]?.poster_path
  );

  useTrailer(movieId);

  return (
    <>
      {/* Desktop Video */}
      <div className="w-screen h-screen hidden md:block">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerData?.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>

      {/* Mobile Background */}
      <div className="md:hidden flex justify-center mt-4">
        <img
          className="w-[90%] border border-gray-300 rounded-xl shadow-lg"
          src={IMG_CDN_URL + poster_path}
          alt="Movie Poster"
        />
      </div>
    </>
  );
};

export default VideoBackground;
