import React, { useState, useEffect, useRef } from "react";
import DarkToggle from "../../elements/DarkToggle";
import { Link } from "react-router-dom";
import DropDown from "../../elements/DropDown";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const searchRef = useRef(null);
  const menuRef = useRef(null);

  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  const closeSearch = () => {
    setOpenSearch(false);
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    if (openSearch || openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSearch, openMenu]);

  const menus = [
    {
      title: "Movies",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-theYellow"
        >
          <path
            fillRule="evenodd"
            d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625Zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5A.375.375 0 0 0 3 5.625Zm16.125-.375a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0 0 21 7.125v-1.5a.375.375 0 0 0-.375-.375h-1.5ZM21 9.375A.375.375 0 0 0 20.625 9h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5ZM4.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5ZM3.375 15h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h1.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 4.875 9h-1.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Zm4.125 0a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      items: [
        { label: "Trending Movies", link: "/movies/trending" },
        { label: "Most Popular Movies", link: "/movies/popular" },
        { label: "Now Playing Movies", link: "/movies/now_playing" },
        { label: "Top Rated Movies", link: "/movies/top_rated" },
        { label: "Upcoming Movies", link: "/movies/upcoming" },
      ],
    },
    {
      title: "TV Shows (Coming Soon)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-theYellow"
        >
          <path d="M19.5 6h-15v9h15V6Z" />
          <path
            fillRule="evenodd"
            d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      items: [
        { label: "TV & Streaming", link: "#" },
        { label: "Most Popular TV Shows", link: "#" },
        { label: "Top Rated TV Shows", link: "#" },
        { label: "TV News", link: "#" },
      ],
    },
    {
      title: "Actors (Coming Soon)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-theYellow"
        >
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
        </svg>
      ),
      items: [
        { label: "Popular Actors", link: "#" },
        { label: "Male Actors", link: "#" },
        { label: "Now Playing Movies", link: "#" },
        { label: "Female Actors", link: "#" },
      ],
    },
    {
      title: "Socials",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-theYellow"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      items: [
        { label: "Instagram", link: "#" },
        { label: "X", link: "#" },
        { label: "Youtube", link: "#" },
        { label: "Facebook", link: "#" },
        { label: "Discord", link: "#" },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-40 max-w-full bg-primary/20 px-4 py-3 text-secondary backdrop-blur-sm lg:px-24 lg:py-2">
      <div className="flex items-center gap-x-4 lg:gap-x-10">
        {/* Logo and Menu */}
        <Link to="/home" className="text-xl font-semibold lg:text-xl">
          <p className="hidden lg:block">
            Movie<span className="font-bold text-theYellow">Radar</span>
          </p>
          <p className="block rounded-md bg-theYellow px-2 text-primary lg:hidden">
            M<span className="font-bold">R</span>
          </p>
        </Link>

        {/* Menu */}
        <button
          onClick={handleMenu}
          className="flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1.5 transition duration-200 hover:bg-secondary/10"
        >
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
        </button>

        {/* Dropdown Menu */}
        {openMenu && (
          <div
            ref={menuRef}
            className="absolute inset-0 bottom-0 z-50 flex h-screen w-3/4 justify-center bg-[#1f1f1f] px-4 py-4 tracking-wide text-white shadow-md transition-all md:w-1/2 lg:h-max lg:w-full lg:pb-20 lg:pt-10"
          >
            <div className="w-full lg:max-w-5xl">
              <div className="mb-3 flex w-full items-center justify-between lg:mb-10">
                <Link to="/home" className="text-xl font-semibold lg:text-2xl">
                  <p className="hidden lg:block">
                    Movie<span className="font-bold text-theYellow">Radar</span>
                  </p>
                  <p className="block rounded-md bg-theYellow px-2 text-primary lg:hidden">
                    M<span className="font-bold">R</span>
                  </p>
                </Link>
                <button
                  onClick={closeMenu}
                  className="rounded-full bg-theYellow p-1 text-xl text-primary hover:bg-[#bb9c41] lg:p-2"
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

              {/*   h-[calc(100vh-10rem)]*/}
              <div className="no-scrollbar h-[calc(100vh-7rem)] overflow-y-auto">
                <div className="w-full flex-wrap justify-between lg:flex">
                  {menus.map((menu, index) => (
                    <DropDown
                      key={index}
                      title={menu.title}
                      icon={menu.icon}
                      items={menu.items}
                      handleMenu={handleMenu}
                    />
                  ))}
                  <div className="mt-10 block pb-5 lg:hidden">
                    <p className="mb-1 text-sm font-semibold text-theGray">
                      LANGUAGE
                    </p>
                    <p>English (US)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#1f1f1f] p-4 lg:hidden"
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
              className="absolute right-8 text-xl text-secondary"
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

        <Link
          to={"/watchlist"}
          className="flex cursor-pointer items-center justify-center gap-1 rounded-lg px-2 py-1.5 transition duration-200 hover:bg-secondary/10"
        >
          <svg
            className="size-7"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13V7M9 10H15M19 21V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V21L12 17L19 21Z"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="hidden lg:block">Watchlist</p>
        </Link>
        <DarkToggle />
      </div>
    </nav>
  );
};

export default Navbar;
