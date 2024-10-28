import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [apiDataTrailer, setApiDataTrailer] = useState({});
  const [apiDataMovie, setApiDataMovie] = useState({});

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjBiNjQxNzQwMTk2YjRjZGM4OTUwMjcxNGI3OTJmOSIsIm5iZiI6MTczMDExNzcxNy4zNzc3MDYsInN1YiI6IjY3MTc5ZTk2N2RjN2M2ZjI3ZDUxMjAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FKToQC8xRnACbPEcdID_wyxX0sJ-eEowfqlCl3po0HU",
    },
  };
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

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((data) => setApiDataMovie(data))
      .catch((err) => console.error(err));
  });

  const formatReleaseDate = (dateString) => {
    const options = { year: "numeric", month: "long" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <Navbar />
      <div className="relative px-6 py-4 lg:px-28">
        {/* Div untuk gambar background yang blur */}
        <div
          // className="absolute inset-0 bg-center bg-no-repeat blur-3xl"
          // style={{
          //   backgroundImage: `url(https://image.tmdb.org/t/p/w500${apiDataMovie.poster_path})`,
          // }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-3xl"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${apiDataMovie.backdrop_path})`,
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
            <p className="text-sm font-medium text-theGray">Tagline</p>
            <p className="font-medium">&quot;Discover your true nature&quot;</p>
          </div>
        </div>

        {/* poster dan trailer */}
        <div className="relative flex max-w-full gap-x-3">
          <img
            className="w-[19rem] rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${apiDataMovie.poster_path}`}
            alt={apiDataMovie.title}
          />
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
                <p className="ml-1 text-lg text-white">8.7 / 10</p>
              </span>
            </div>
            <div className="mb-3">
              <p className="text-sm text-theGray">Status</p>
              <p className="text-lg text-white">Released</p>
            </div>
            <div className="mb-3">
              <p className="text-sm text-theGray">Popularity</p>
              <p className="text-lg text-white">5200.959</p>
            </div>
            <div className="mb-3">
              <p className="text-sm text-theGray">Budget</p>
              <p className="text-lg text-white">$78.000.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
