import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const WatchlistPage = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Ambil data watchlist dari localStorage saat komponen dirender
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []);

  // Fungsi untuk menghapus item dari watchlist
  const handleDelete = (movieId) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const formatReleaseDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString("en-US", options);
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
                    <p className="text-sm">
                      {movie.release_date
                        ? formatReleaseDate(movie.release_date)
                        : "Release Date"}
                    </p>
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
                      <p className="ml-1 text-white">
                        {parseFloat(movie.vote_average).toFixed(1)} / 10
                      </p>
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-x-2 text-primary">
                      <div className="flex items-center justify-center gap-x-2 rounded-full bg-theYellow px-0.5 font-medium lg:px-1">
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
                      </div>
                      <p className="flex w-full cursor-pointer items-center justify-center rounded-full bg-theYellow py-1 text-sm font-medium hover:bg-[#bb9c41] lg:py-1.5 lg:text-base">
                        <Link to={`/movie/${movie.id}`}>View Details</Link>
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(movie.id)}
                      className="flex w-full items-center justify-center gap-x-2 rounded-full bg-red-800 py-1 text-sm font-medium text-secondary hover:bg-red-900 lg:py-1.5 lg:text-base"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 lg:size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p>Remove</p>
                    </button>
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
