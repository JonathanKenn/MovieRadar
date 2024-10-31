import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const MovieListTrending = ({ title }) => {
  const [apiDataTrending, setApiDataTrending] = useState([]);
  const sliderRef = useRef(null); // Reference for the slider container
  const [isAtStart, setIsAtStart] = useState(true); // State untuk kondisi di awal scroll
  const [isAtEnd, setIsAtEnd] = useState(false); // State untuk kondisi di akhir scroll

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjBiNjQxNzQwMTk2YjRjZGM4OTUwMjcxNGI3OTJmOSIsIm5iZiI6MTczMDAwNDIwOC43MDc3MzMsInN1YiI6IjY3MTc5ZTk2N2RjN2M2ZjI3ZDUxMjAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4DbJ8GS_wbHuyzEeFCLZQLypdYWMcuYnmlS3cfLaqs",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiDataTrending(res.results))
      .catch((err) => console.error(err));
  });

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const marginError = 5; // Toleransi 5px

      setIsAtStart(scrollLeft <= marginError); // Kondisi awal dengan toleransi
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - marginError); // Kondisi akhir dengan toleransic
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300, // Adjust this value as needed for scrolling distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // Memantau scroll dan update kondisi posisi
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollPosition);
    }
    // Cleanup listener saat component unmount
    return () => {
      if (slider) {
        slider.removeEventListener("scroll", checkScrollPosition);
      }
    };
  });

  return (
    <div className="relative px-6 py-4 lg:px-28">
      <h1 className="mb-5 text-xl font-medium">{title}</h1>
      {/* movie section */}
      {!isAtStart && ( // Tampilkan tombol jika tidak di posisi awal
        <button
          onClick={scrollLeft}
          className="slide-button absolute left-2 top-1/2 z-10 flex h-12 w-8 items-center justify-center rounded border bg-primary opacity-75 transition hover:opacity-100 lg:left-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}

      <div
        ref={sliderRef}
        className="movie-list mb-3 flex gap-x-5 overflow-x-auto"
      >
        {apiDataTrending.map((card, index) => (
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

      {!isAtEnd && ( // Tampilkan tombol jika tidak di posisi akhir
        <button
          onClick={scrollRight}
          className="slide-button absolute right-2 top-1/2 z-10 flex h-12 w-8 items-center justify-center rounded border bg-primary opacity-75 transition hover:opacity-100 lg:right-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}

      {/* End movie section */}
    </div>
  );
};

export default MovieListTrending;
