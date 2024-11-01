import React from "react";

const MovieCast = ({ credits, role }) => {
  return (
    <div className="my-4 grid grid-cols-2 gap-y-3 lg:grid-cols-3">
      {credits
        .filter((actor) => actor.known_for_department === role)
        .map((actor, index) => (
          <div
            key={index}
            className="mb-3 flex w-full flex-col items-center gap-x-4 lg:flex-row"
          >
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : "../img/defaultProfile.jpg"
              }
              alt={`${actor.name} profile`}
              className="size-24 rounded-full object-cover"
            />
            <div className="text-center">
              <h2 className="text-base font-semibold lg:text-lg">
                {actor.name}
              </h2>
              <p className="text-sm text-gray-600">{actor.character}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieCast;
