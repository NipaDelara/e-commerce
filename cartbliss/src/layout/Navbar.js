import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="p-2 bg-slate-200">
        <li className="flex space-x-3">
          <Link
            className="py-2 px-4 bg-slate-400 rounded-md text-black hover:bg-slate-500 "
            to="/">
            Home
          </Link>
          <Link
            className="py-2 px-4 bg-slate-400 rounded-md text-black hover:bg-slate-500 "
            to="/store">
            Store
          </Link>
          <Link
            className="py-2 px-4 bg-slate-400 rounded-md text-black hover:bg-slate-500 "
            to="/about">
            About
          </Link>
          <Link
            className="py-2 px-4 bg-slate-400 rounded-md text-black hover:bg-slate-500 "
            to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default Navbar;
