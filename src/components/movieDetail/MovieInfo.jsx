import React from "react";

const MovieInfo = ({
  posterPath,
  trailerKey,
  title,
  voteAverage,
  voteCount,
  status,
  popularity,
  budget,
}) => {
  return (
    <div className="relative grid max-w-full grid-cols-7 gap-3 overflow-hidden lg:flex">
      <img
        className="poster-img order-2 col-start-1 col-end-4 w-full rounded-lg lg:order-none lg:w-[19rem]"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
      />
      <svg
        className="absolute -left-2 -top-0.5 size-14 cursor-pointer text-[#24211E] opacity-75 transition hover:opacity-100"
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
          strokeWidth={0.7}
        ></path>
      </svg>

      <iframe
        className="order-1 col-span-7 h-56 w-full rounded-lg lg:order-none lg:h-[28rem] lg:w-8/12"
        allowFullScreen
        src={`https://www.youtube.com/embed/${trailerKey}`}
      ></iframe>

      <div className="spek-movie order-3 col-start-4 col-end-7 font-medium lg:order-none">
        <div className="mb-2 lg:mb-3">
          <p className="text-sm text-theGray">Rating ({voteCount})</p>
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
              {parseFloat(voteAverage).toFixed(1)} / 10
            </p>
          </span>
        </div>
        <div className="mb-2 lg:mb-3">
          <p className="text-sm text-theGray">Status</p>
          <p className="text-lg text-white">{status}</p>
        </div>
        <div className="mb-2 lg:mb-3">
          <p className="text-sm text-theGray">Popularity</p>
          <p className="text-lg text-white">
            {parseFloat(popularity).toFixed(1)}
          </p>
        </div>
        <div className="mb-2 lg:mb-3">
          <p className="text-sm text-theGray">Budget</p>
          <p className="text-lg text-white">
            {budget ? `$${budget.toLocaleString("en-US")}` : "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
