import React from "react";

const MovieGenreDesc = ({ genres, overview }) => {
  return (
    <div className="relative mt-4 max-w-6xl justify-between font-medium lg:flex">
      <div className="max-w-4xl">
        <div className="my-4 flex flex-wrap gap-3 lg:my-0">
          {genres?.map((genre) => (
            <p
              className="rounded-full border border-theGray px-4 py-1 text-sm"
              key={genre.id}
            >
              {genre.name}
            </p>
          ))}
        </div>
        <div className="my-2">
          <p className="text-sm font-normal lg:text-base">{overview}</p>
        </div>
      </div>
      <div className="my-4 lg:my-0">
        <button className="flex w-full items-center justify-center gap-x-2 rounded-full bg-theYellow px-7 py-3 text-primary hover:bg-[#bb9c41] lg:py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"
            />
          </svg>

          <p>Add to Watchlist</p>
        </button>
      </div>
    </div>
  );
};

export default MovieGenreDesc;
