import Navbar from "../components/layout/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieHeader from "../components/movieDetail/MovieHeader";
import MovieInfo from "../components/movieDetail/MovieInfo";
import MovieCredits from "../components/movieDetail/MovieCrew";
import MovieGenreDesc from "../components/movieDetail/MovieGenreDesc";
import MovieCast from "../components/movieDetail/MovieCast";
import Footer from "../components/layout/Footer";
import DetailsMovie from "../components/movieDetail/DetailsMovie";
import axios from "axios";

const MovieDetailPage = () => {
  // const { id } = useParams();
  const { slug } = useParams();
  const [apiDataTrailer, setApiDataTrailer] = useState({});
  const [apiDataMovie, setApiDataMovie] = useState({});
  const [crew, setCrew] = useState([]);
  const [cast, setCast] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjBiNjQxNzQwMTk2YjRjZGM4OTUwMjcxNGI3OTJmOSIsIm5iZiI6MTczMDExNzcxNy4zNzc3MDYsInN1YiI6IjY3MTc5ZTk2N2RjN2M2ZjI3ZDUxMjAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FKToQC8xRnACbPEcdID_wyxX0sJ-eEowfqlCl3po0HU",
    },
  };

  // useEffect(() => {
  //   // Mendapatkan data film, trailer, dan kredit
  //   axios
  //     .get(`https://api.themoviedb.org/3/movie/${slug}?language=en-US`, options)
  //     .then((movieRes) => {
  //       setApiDataMovie(movieRes.data);
  //     })
  //     .catch((error) => console.error(error));

  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
  //       options,
  //     )
  //     .then((videoRes) => {
  //       const trailer = videoRes.data.results.find(
  //         (video) => video.type === "Trailer",
  //       );
  //       setApiDataTrailer(trailer);
  //     })
  //     .catch((error) => console.error(error));

  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`,
  //       options,
  //     )
  //     .then((creditsRes) => {
  //       setCast(creditsRes.data.cast);
  //       setCrew(creditsRes.data.crew);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
    // Mencari film berdasarkan title untuk mendapatkan id
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${slug}&language=en-US`,
        options,
      )
      .then((res) => {
        const movie = res.data.results[0];
        if (movie) {
          setApiDataMovie(movie);

          // Mengambil trailer berdasarkan id film
          axios
            .get(
              `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
              options,
            )
            .then((videoRes) => {
              const trailer = videoRes.data.results.find(
                (video) => video.type === "Trailer",
              );
              setApiDataTrailer(trailer);
            })
            .catch((error) => console.error(error));

          // Mengambil cast dan crew berdasarkan id film
          axios
            .get(
              `https://api.themoviedb.org/3/movie/${movie.id}/credits?language=en-US`,
              options,
            )
            .then((creditsRes) => {
              setCast(creditsRes.data.cast);
              setCrew(creditsRes.data.crew);
            })
            .catch((error) => console.error(error));
        }
      })
      .catch((error) => console.error(error));
  });
  return (
    <div>
      <Navbar />
      <div className="relative px-4 py-4 lg:px-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-3xl"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) , rgba(0,0,0,0.1) , rgba(0,0,0,0.4) , rgba(0,0,0,0.8) ) ,url(https://image.tmdb.org/t/p/w500${apiDataMovie.backdrop_path})`,
          }}
        ></div>

        {/* header */}
        <MovieHeader movie={apiDataMovie} />

        {/* poster dan trailer */}
        <MovieInfo movie={apiDataMovie} trailerKey={apiDataTrailer?.key} />

        {/* spek */}
        <MovieGenreDesc
          genres={apiDataMovie.genres || []}
          overview={apiDataMovie.overview}
        />

        {/* Credits */}
        <div className="relative max-w-4xl py-2 font-medium">
          <MovieCredits crew={crew} role="Director" title="Director" />
          <MovieCredits crew={crew} role="Producer" title="Producers" />
          <MovieCredits crew={crew} role="Writing" title="Writers" />
        </div>
      </div>

      {/* Cast */}
      <div className="relative bg-secondary px-6 py-10 text-primary lg:px-28">
        <div className="flex items-center gap-x-3">
          <div className="h-7 w-1 rounded-full bg-theYellow lg:h-9"></div>
          <h1 className="text-2xl font-semibold lg:text-3xl">Actors</h1>
        </div>
        <MovieCast credits={cast} role="Acting" />
      </div>
      <div className="bg-secondary px-6 py-4 text-primary lg:px-28 lg:py-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-x-3">
            <div className="h-7 w-1 rounded-full bg-theYellow lg:h-9"></div>
            <h1 className="text-2xl font-semibold lg:text-3xl">Details</h1>
          </div>
          <div className="py-7 font-medium">
            <DetailsMovie details={apiDataMovie} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieDetailPage;
