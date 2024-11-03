import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AllMovieCategoryPage = ({ title }) => {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);

  const formatCategory = (category) => {
    return category
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjBiNjQxNzQwMTk2YjRjZGM4OTUwMjcxNGI3OTJmOSIsIm5iZiI6MTczMDAwNDIwOC43MDc3MzMsInN1YiI6IjY3MTc5ZTk2N2RjN2M2ZjI3ZDUxMjAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4DbJ8GS_wbHuyzEeFCLZQLypdYWMcuYnmlS3cfLaqs",
    },
  };

  useEffect(() => {
    const url =
      category === "trending"
        ? "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
        : `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  });

  return (
    <div>
      <Navbar />
      <div className="px-6 py-4 lg:px-28">
        <div className="mb-6 flex items-center gap-x-3">
          <div className="h-7 w-1 rounded-full bg-theYellow lg:h-9"></div>
          <h1 className="text-3xl font-semibold">{formatCategory(category)}</h1>
        </div>

        <div className="mb-3 grid grid-cols-2 justify-center justify-items-center gap-5 md:grid-cols-4 lg:grid-cols-12">
          {movies.map((card, index) => (
            <div key={index} className="col-span-2 rounded-b-xl bg-[#1a1a1a]">
              <Link
                to={`/movie/${card.id}`}
                className="relative max-w-36 cursor-pointer overflow-hidden bg-slate-200 lg:max-w-full"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                  alt={card.original_title}
                />
                <svg
                  className="absolute -left-2 -top-0.5 size-10 text-[#24211E] opacity-75 transition hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M8.5 4a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"
                    stroke="white"
                    strokeWidth={0.8}
                  ></path>
                </svg>
              </Link>
              <div className="px-3 py-3">
                <div className="mb-1 flex items-center font-medium">
                  <span className="flex text-theYellow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="ml-1 text-sm text-theGray">
                      {parseFloat(card.vote_average).toFixed(1)} / 10
                    </p>
                  </span>
                </div>
                <div className="mb-7">
                  <Link
                    to={`/movie/${card.id}`}
                    className="text-base font-semibold hover:underline"
                  >
                    {card.original_title.length > 18
                      ? card.original_title.substring(0, 18) + "..."
                      : card.original_title}
                  </Link>
                </div>
                <button className="mb-1 flex w-full cursor-pointer items-center justify-center gap-1 rounded-full bg-secondary/10 px-2 py-2 text-sm font-medium transition duration-200 hover:bg-secondary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="hidden lg:block">Watchlist</p>
                </button>
                <button className="w-full cursor-pointer rounded-full px-2 py-2 text-sm hover:bg-secondary/5">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllMovieCategoryPage;