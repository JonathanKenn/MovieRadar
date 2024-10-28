// src/api/movieApi.js

const API_URL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjBiNjQxNzQwMTk2YjRjZGM4OTUwMjcxNGI3OTJmOSIsIm5iZiI6MTczMDAwNDIwOC43MDc3MzMsInN1YiI6IjY3MTc5ZTk2N2RjN2M2ZjI3ZDUxMjAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4DbJ8GS_wbHuyzEeFCLZQLypdYWMcuYnmlS3cfLaqs",
  },
};

// Fetch trending movies
export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${API_URL}/trending/movie/day?language=en-US`,
      options,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

// Fetch popular movies
export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `${API_URL}/movie/popular?language=en-US&page=1`,
      options,
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};
