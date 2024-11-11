// DropdownMenu.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ title, icon, items, handleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="space-y-7 lg:space-y-6">
      {/* Desktop */}
      <div className="hidden items-center gap-x-2 lg:flex">
        {icon}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <ul className="ml-8 hidden space-y-4 text-start font-medium lg:block">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              onClick={handleMenu}
              to={item.link}
              className="hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div>
        <div
          className="flex cursor-pointer items-center justify-between lg:hidden"
          onClick={toggleDropdown}
        >
          <div className="flex gap-x-2">
            {icon}
            <h2 className="text-base font-bold">{title}</h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {isOpen && (
          <ul className="mt-5 space-y-2 text-start font-medium lg:hidden">
            {items.map((item, index) => (
              <Link
                onClick={handleMenu}
                to={item.link}
                key={index}
                className="flex py-2 pl-8 hover:bg-secondary/10"
              >
                {item.label}
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
