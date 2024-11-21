import React, { useEffect, useState } from "react";

import AddWatchlistSvg from "../../elements/AddWatchlistSvg";

const MovieInfo = ({ movie, trailerKey }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []);

  const addToWatchlist = (movie) => {
    // Cek apakah movie sudah ada di watchlist
    const isAlreadyInWatchlist = watchlist.some((item) => item.id === movie.id);

    if (!isAlreadyInWatchlist) {
      const updatedWatchlist = [...watchlist, movie];
      setWatchlist(updatedWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    } else {
      alert("Movie sudah ada di watchlist.");
    }
  };

  return (
    <div className="relative grid max-w-full grid-cols-7 gap-3 overflow-hidden lg:flex">
      <img
        className="poster-img order-2 col-start-1 col-end-4 w-full rounded-lg lg:order-none lg:w-[19rem]"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <AddWatchlistSvg
        value={14}
        onAddWatchlist={() => addToWatchlist(movie)}
      />

      <iframe
        className="order-1 col-span-7 h-56 w-full rounded-lg lg:order-none lg:h-[28rem] lg:w-8/12"
        allowFullScreen
        src={`https://www.youtube.com/embed/${trailerKey}`}
      ></iframe>

      <div className="spek-movie order-3 col-start-4 col-end-7 font-medium lg:order-none">
        <div className="mb-2 lg:mb-3">
          <p className="text-sm text-theGray">Rating ({movie.vote_count})</p>
          <span className="flex text-theYellow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="ml-1 text-lg text-white">
              {parseFloat(movie.vote_average).toFixed(1)} / 10
            </p>
          </span>
        </div>
        <div className="mb-2 lg:mb-3">
          <p className="text-sm text-theGray">Status</p>
          <p className="text-lg text-white">{movie.status}</p>
        </div>
        <div className="mb-2 lg:mb-3">
          <p className="text-sm text-theGray">Popularity</p>
          <p className="text-lg text-white">
            {parseFloat(movie.popularity).toFixed(1)}
          </p>
        </div>
        <div className="mb-2 lg:mb-3">
          <p className="text-sm text-theGray">Budget</p>
          <p className="text-lg text-white">
            {movie.budget ? `$${movie.budget.toLocaleString("en-US")}` : "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
