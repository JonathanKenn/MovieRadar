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

        <div className="mb-3 grid grid-cols-2 justify-center justify-items-center gap-y-7 md:grid-cols-4 lg:grid-cols-6">
          {movies.map((card, index) => (
            <Link
              to={`/movie/${card.id}`}
              key={index}
              className="group relative max-w-36 flex-shrink-0 cursor-pointer overflow-hidden bg-slate-200 lg:max-w-48"
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
              <figcaption className="absolute -bottom-14 w-full bg-gradient-to-t from-primary to-primary/50 py-1.5 text-center font-medium transition-all duration-200 group-hover:bottom-0">
                {card.original_title}
              </figcaption>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllMovieCategoryPage;
