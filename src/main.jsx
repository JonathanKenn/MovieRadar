import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/404.jsx";
import MovieDetail from "./pages/MovieDetailPage.jsx";
import AllMovieCategoryPage from "./pages/AllMovieCategoryPage.jsx";
import WatchlistPage from "./pages/WatchlistPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/movies/:category",
    element: <AllMovieCategoryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    // path: "/movie/:id",
    path: "/movie/:slug",
    errorElement: <ErrorPage />,
    element: <MovieDetail />,
  },
  {
    path: "/watchlist",
    errorElement: <ErrorPage />,
    element: <WatchlistPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
