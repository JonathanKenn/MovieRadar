import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const WatchlistPage = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Ambil data watchlist dari localStorage saat komponen dimuat
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []);

  // Fungsi untuk menghapus item dari watchlist
  const handleDelete = (movieId) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  return (
    <div>
      <Navbar />
      <div className="px-4 py-4 lg:px-24">
        <div className="mb-6 flex items-center gap-x-3">
          <div className="h-7 w-1 rounded-full bg-theYellow lg:h-9"></div>
          <h1 className="text-3xl font-semibold">My Watchlist</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {watchlist.length > 0 ? (
            watchlist.map((movie, index) => (
              <div
                key={index}
                className="flex h-48 items-center gap-x-3 rounded-xl border border-theGray p-3 lg:h-64"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                  className="h-full rounded-md"
                />

                <div className="flex h-full w-full flex-col justify-between">
                  <div className="space-y-2">
                    <Link
                      to={`/movie/${movie.id}`}
                      className="text-base font-semibold hover:text-white/70"
                    >
                      <h2 className="font-bold lg:text-xl">
                        {movie.original_title}
                      </h2>
                    </Link>
                    <div className="flex gap-x-4 text-sm">
                      <p>
                        {movie.release_date
                          ? movie.release_date.split("-")[0]
                          : "N/A"}
                      </p>
                      <p>{movie.runtime ? `${movie.runtime} min` : "N/A"}</p>
                      <p>{movie.rating || "N/A"}</p>
                    </div>
                    <span className="flex text-theYellow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="ml-1 text-white">
                        {movie.vote_average || "N/A"} / 10
                      </p>
                    </span>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleDelete(movie.id)}
                      className="flex w-full items-center justify-center gap-x-2 rounded-full bg-theYellow py-1 font-medium text-primary hover:bg-[#bb9c41] lg:py-1.5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 lg:size-7"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p className="text-sm lg:text-base">In Watchlist</p>
                    </button>
                    <p className="w-full cursor-pointer rounded-full py-1 text-center text-sm hover:bg-secondary/10 lg:py-2">
                      <Link to={`/movie/${movie.id}`}>View Details</Link>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No movies in your watchlist.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default WatchlistPage;
