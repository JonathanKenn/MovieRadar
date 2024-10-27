import React, { useEffect, useState } from "react";
import "flowbite";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
const HomePage = () => {
  return (
    <div className="h-[100rem]">
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-48 overflow-hidden rounded-lg md:min-h-80 lg:min-h-[34rem]">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src="img/venom.jpg"
              className="absolute left-1/2 top-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
              alt="venom"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="img/thewildrobot.jpg"
              className="absolute left-1/2 top-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
              alt="thewildrobot"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="img/transformerone.jpg"
              className="absolute left-1/2 top-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
              alt="transformerone"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="img/alien2.jpeg"
              className="absolute left-1/2 top-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
              alt="alien2"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="img/joker2.jpg"
              className="absolute left-1/2 top-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
              alt="joker2"
            />
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
          <button
            type="button"
            className="h-3 w-3 rounded-full"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="h-3 w-3 rounded-full"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="h-3 w-3 rounded-full"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="h-3 w-3 rounded-full"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="h-3 w-3 rounded-full"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
      </div>
      <Navbar />
      <MovieList />
    </div>
  );
};

export default HomePage;
