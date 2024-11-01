import React from "react";

const MovieGenreDesc = ({ genres, overview }) => {
  return (
    <div className="relative mt-4 flex max-w-6xl justify-between font-medium">
      <div className="max-w-4xl">
        <div className="flex gap-x-3">
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
          <p className="font-normal">{overview}</p>
        </div>
      </div>
      <div>
        <button className="flex items-center gap-x-2 rounded-full bg-theYellow px-7 py-2 text-primary hover:bg-[#bb9c41]">
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
