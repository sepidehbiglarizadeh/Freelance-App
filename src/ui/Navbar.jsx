import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { HiOutlineUser } from "react-icons/hi";
import Logout from "../features/authentication/Logout";
import { Link } from "react-router-dom";

function Navbar({ user, isLoading }) {
  return (
    <nav className="container xl:max-w-screen-xl py-3 md:py-6 mb-6 md:mb-10">
      <div
        className={`flex items-center justify-between ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <div className="flex items-center gap-x-2">
          <img src="/Logo.png" alt="logo" />
          <span className="text-primary-900 font-black text-lg md:text-2xl block">
            فریلندرز
          </span>
        </div>

        <ul className="flex gap-x-4 items-center">
          <li className="flex">
            <Link
              to={
                user
                  ? user.role === "ADMIN"
                    ? "/admin/dashboard"
                    : user.roel === "FREELANCER"
                    ? "/admin/freelancer"
                    : user.roel === "OWNER"
                    ? "/admin/owner"
                    : "/"
                  : "/auth"
              }
            >
              <HiOutlineUser className="w-5 h-5 text-primary-900" />
            </Link>
          </li>
          <li className="flex">
            <DarkModeToggle />
          </li>
          {user && (
            <li className="flex">
              <Logout />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
