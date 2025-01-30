import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import AddWatchlistSvg from "../../elements/AddWatchlistSvg";

const MovieList = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const sliderRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjBiNjQxNzQwMTk2YjRjZGM4OTUwMjcxNGI3OTJmOSIsIm5iZiI6MTczMDAwNDIwOC43MDc3MzMsInN1YiI6IjY3MTc5ZTk2N2RjN2M2ZjI3ZDUxMjAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4DbJ8GS_wbHuyzEeFCLZQLypdYWMcuYnmlS3cfLaqs",
      },
    };

    const url =
      category === "trending"
        ? "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
        : `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
    axios
      .get(url, options)
      .then((res) => setApiData(res.data.results))
      .catch((err) => console.error(err));
  }, [category]);

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

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(savedWatchlist);
  }, []); // Load hanya sekali saat pertama kali render

  const addToWatchlist = (movie) => {
    // Cek apakah movie sudah ada di watchlist
    const isAlreadyInWatchlist = watchlist.some((item) => item.id === movie.id);

    if (!isAlreadyInWatchlist) {
      const updatedWatchlist = [...watchlist, movie];
      setWatchlist(updatedWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      alert("Movie added to watchlist.");
    } else {
      alert("Movie sudah ada di watchlist.");
    }
  };

  return (
    <div className="relative px-6 py-4 lg:px-28">
      <Link to={`/movies/${category}`}>
        <h2 className="mb-3 inline-block text-xl font-medium hover:underline">
          {title}
        </h2>
      </Link>
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

      <div ref={sliderRef} className="movie-list flex gap-x-5 overflow-x-auto">
        {apiData.map((card, index) => (
          <div
            key={index}
            className="group relative max-w-36 flex-shrink-0 cursor-pointer overflow-hidden lg:max-w-52"
          >
            <AddWatchlistSvg
              value={12}
              onAddWatchlist={() => addToWatchlist(card)}
            />
            {/* <Link to={`/movie/${card.id}`}> */}
            <Link to={`/movie/${encodeURIComponent(card.original_title)}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                alt={card.original_title}
                loading="lazy"
              />
            </Link>
            <figcaption className="absolute -bottom-14 w-full bg-gradient-to-t from-primary to-primary/50 py-1.5 text-center font-medium transition-all duration-200 group-hover:bottom-0">
              {card.original_title}
            </figcaption>
          </div>
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

export default MovieList;
