import React, { useState, useEffect, useRef } from "react";
import DarkToggle from "../elements/DarkToggle";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const searchRef = useRef(null); // Create a ref for the search overlay

  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  const closeSearch = () => {
    setOpenSearch(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch(); // Close search if clicked outside
      }
    };

    if (openSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSearch]);

  return (
    <nav className="bg-white/7 sticky top-0 z-50 max-w-full px-4 py-3 text-secondary backdrop-blur-sm lg:px-20 lg:py-4">
      <div className="flex items-center gap-x-4 lg:gap-x-10">
        {/* Logo and Menu */}
        <h1 className="text-xl font-semibold lg:text-xl">
          <p className="hidden lg:block">
            Movie<span className="font-bold text-theYellow">Radar</span>
          </p>
          <p className="block rounded-md bg-theYellow px-2 text-primary lg:hidden">
            M<span className="font-bold">R</span>
          </p>
        </h1>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <p className="hidden font-semibold lg:block">Menu</p>
        </div>

        {/* Mobile Search Button */}
        <button
          onClick={handleSearch}
          className="ml-auto text-secondary lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

        {/* Full-Screen Search Overlay for Mobile */}
        {openSearch && (
          <div
            ref={searchRef} // Attach ref to the overlay
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1f1f1f] p-4 lg:hidden"
          >
            <div className="w-full max-w-lg">
              <input
                className="w-full rounded-md bg-transparent px-4 py-2 text-secondary shadow-sm placeholder:italic placeholder:text-slate-300 focus:border-theYellow focus:outline-none focus:ring-1 focus:ring-theYellow sm:text-sm lg:border lg:border-slate-300"
                placeholder="Search"
                type="text"
                name="search"
              />
            </div>
            <button
              onClick={closeSearch}
              className="absolute right-8 top-4 text-xl text-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Regular Search and Right-side Icons for Desktop */}
        <div className="relative hidden w-full lg:block">
          <span className="inset-y-0 left-0 flex justify-end pl-3 lg:absolute lg:items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6 text-secondary lg:text-slate-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <input
            className="absolute z-30 w-full rounded-md border border-slate-300 bg-white py-2 text-primary shadow-sm placeholder:italic placeholder:text-slate-300 focus:border-theYellow focus:outline-none focus:ring-1 focus:ring-theYellow sm:text-sm lg:static lg:block lg:pl-11"
            placeholder="Search"
            type="text"
            name="search"
          />
        </div>

        <div className="flex items-center gap-1">
          <svg
            className="size-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13V7M9 10H15M19 21V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V21L12 17L19 21Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="hidden lg:block">Watchlist</p>
        </div>
        <DarkToggle />
      </div>
    </nav>
  );
};

export default Navbar;
