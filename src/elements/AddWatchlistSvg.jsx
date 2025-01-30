import React from "react";

const AddWatchlistSvg = ({ value, onAddWatchlist, movieId }) => {
  return (
    <>
      <svg
        onClick={() => onAddWatchlist(movieId)}
        className={`absolute -left-2 -top-0.5 w-${value} cursor-pointer text-[#24211E] opacity-75 transition hover:opacity-100`}
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
    </>
  );
};

export default AddWatchlistSvg;
