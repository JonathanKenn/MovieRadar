import Navbar from "../components/layout/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [apiDataTrailer, setApiDataTrailer] = useState({});
  const [apiDataMovie, setApiDataMovie] = useState({});
  const [credits, setCredits] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjBiNjQxNzQwMTk2YjRjZGM4OTUwMjcxNGI3OTJmOSIsIm5iZiI6MTczMDExNzcxNy4zNzc3MDYsInN1YiI6IjY3MTc5ZTk2N2RjN2M2ZjI3ZDUxMjAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FKToQC8xRnACbPEcdID_wyxX0sJ-eEowfqlCl3po0HU",
    },
  };

  // Fetch movie video
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((res) => {
        const trailer = res.results.find((video) => video.type === "Trailer");
        setApiDataTrailer(trailer);
      })
      .catch((err) => console.error(err));
  });

  // Fetch movie details
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((data) => setApiDataMovie(data))
      .catch((err) => console.error(err));
  });

  // Fetch movie credits
  fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options,
  )
    .then((res) => res.json())
    .then((data) => setCredits(data.crew)) // Assuming you want to use crew info
    .catch((err) => console.error(err));

  const formatReleaseDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <Navbar />
      <div className="relative px-6 py-4 lg:px-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-3xl"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) , rgba(0,0,0,0.1) , rgba(0,0,0,0.4) , rgba(0,0,0,0.8) ) ,url(https://image.tmdb.org/t/p/w500${apiDataMovie.backdrop_path})`,
          }}
        ></div>

        {/* header */}
        <div className="relative mb-3 flex items-end justify-between">
          <div>
            <h1 className="mb-1.5 text-4xl font-semibold">
              {apiDataMovie.title}
            </h1>
            <span className="flex gap-x-1.5 text-sm font-medium text-theGray">
              <p>
                {apiDataMovie.release_date
                  ? formatReleaseDate(apiDataMovie.release_date)
                  : "Release Date"}
              </p>
              |
              <p>
                {apiDataMovie.runtime
                  ? `${apiDataMovie.runtime} Minutes`
                  : "Runtime"}
              </p>
              |<p>{apiDataMovie.adult ? "R" : "PG"}</p>
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-theGray drop-shadow-2xl">
              Tagline
            </p>
            <p className="font-medium">&quot;{apiDataMovie.tagline}&quot;</p>
          </div>
        </div>

        {/* poster dan trailer */}
        <div className="relative flex max-w-full gap-x-3 overflow-hidden">
          <img
            className="w-[19rem] rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${apiDataMovie.poster_path}`}
            alt={apiDataMovie.title}
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
            className="w-full rounded-lg"
            allowFullScreen
            src={`https://www.youtube.com/embed/${apiDataTrailer.key}`}
          ></iframe>
          <div className="font-medium">
            <div className="mb-3">
              <p className="text-sm text-theGray">Rating (1285)</p>
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
                  {parseFloat(apiDataMovie.vote_average).toFixed(1)} / 10
                </p>
              </span>
            </div>
            <div className="mb-3">
              <p className="text-sm text-theGray">Status</p>
              <p className="text-lg text-white">{apiDataMovie.status}</p>
            </div>
            <div className="mb-3">
              <p className="text-sm text-theGray">Popularity</p>
              <p className="text-lg text-white">
                {parseFloat(apiDataMovie.popularity).toFixed(1)}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-sm text-theGray">Budget</p>
              <p className="text-lg text-white">
                {apiDataMovie.budget
                  ? `$${apiDataMovie.budget.toLocaleString("en-US")}`
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* spek */}
        <div className="relative mt-4 flex max-w-6xl justify-between font-medium">
          <div className="max-w-4xl">
            <div className="flex gap-x-3">
              {apiDataMovie.genres?.map((genre) => (
                <p
                  className="rounded-full border border-theGray px-4 py-1 text-sm"
                  key={genre.id}
                >
                  {genre.name}
                </p>
              ))}
            </div>
            <div className="my-2">
              <p className="font-normal">{apiDataMovie.overview}</p>
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

        {/* director */}
        <div className="relative py-2">
          <div className="relative max-w-4xl font-medium">
            <div className="flex border-t border-t-theGray py-2">
              <p className="mr-5 font-semibold">Director:</p>
              {credits
                .filter((credit) => credit.job === "Director")
                .map((director) => (
                  <p className="font-medium text-[#5699f0]" key={director.id}>
                    {director.name}
                  </p>
                ))}
            </div>
            <div className="flex border-t border-t-theGray py-2">
              <p className="mr-5 font-semibold">Writers:</p>
              <p className="font-medium text-[#5699f0]">
                {credits
                  .filter((credit) => credit.known_for_department === "Writing")
                  .map((writer, index, array) => (
                    <span
                      key={writer.id}
                      className="font-medium text-[#5699f0]"
                    >
                      {writer.name}
                      {index < array.length - 1 && (
                        <span className="mx-2">~</span>
                      )}
                    </span>
                  ))}
              </p>
            </div>
            <div className="flex border-t border-t-theGray py-2">
              <p className="mr-5 font-semibold">Producers:</p>
              {credits
                .filter((credit) => credit.job === "Producer")
                .map((producer) => (
                  <p className="font-medium text-[#5699f0]" key={producer.id}>
                    {producer.name}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
