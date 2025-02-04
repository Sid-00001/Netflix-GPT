import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-1/3 left-10 md:left-16 lg:left-20 bg-gradient-to-r from-black/80 to-transparent text-white p-6 rounded-lg max-w-2xl">
      <h1 className="text-5xl font-extrabold drop-shadow-xl">{title}</h1>
      <p className="mt-2 text-lg text-gray-300 drop-shadow-md">{overview}</p>
      <div className="mt-4 flex space-x-4">
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition-all shadow-lg">
          ▶ Play
        </button>
        <button className="px-6 py-3 bg-gray-900 bg-opacity-80 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all shadow-lg">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
