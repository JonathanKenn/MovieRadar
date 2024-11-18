import React from "react";

const MovieHeader = ({ movie }) => {
  const formatReleaseDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="relative mb-3 items-end justify-between lg:flex">
      <div>
        <h1 className="mb-1.5 text-3xl font-semibold lg:text-4xl">
          {movie.title}
        </h1>
        <span className="flex gap-x-1.5 text-sm font-medium text-theGray">
          <p>
            {movie.release_date
              ? formatReleaseDate(movie.release_date)
              : "Release Date"}
          </p>
          |<p>{movie.runtime ? `${movie.runtime} Minutes` : "Runtime"}</p>|
          <p>{movie.adult ? "R" : "PG"}</p>
        </span>
      </div>
      <div className="hidden lg:block">
        <p className="text-sm font-medium text-theGray drop-shadow-2xl">
          Tagline
        </p>
        <p className="font-medium">&quot;{movie.tagline}&quot;</p>
      </div>
    </div>
  );
};

export default MovieHeader;
