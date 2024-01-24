import React from "react";
import {
  faSearch,
  faHome,
  faSuitcase,
  faUserGroup,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="relative">
      <nav className="grid grid-cols-7 text-xl w-full place-content-center px-4 bg-white fixed top-0 z-50 min-h-14 items-center	justify-center">
        <div className="text-blue-500 text-4xl  ">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? "text-black-300" : "text-gray-400"
          }
        >
          <FontAwesomeIcon icon={faSearch} />
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-black-300" : "text-gray-400"
          }
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-gray-400" : "text-black-300"
          }
        >
          <FontAwesomeIcon icon={faUserGroup} />
        </NavLink>
        <div className="text-gray-400">
          <FontAwesomeIcon icon={faSuitcase} />
        </div>
        <div className="text-gray-400 ">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="text-gray-400 h-8 w-8 bg-slate-600 rounded-full"></div>
      </nav>
    </div>
  );
};

export default Header;
