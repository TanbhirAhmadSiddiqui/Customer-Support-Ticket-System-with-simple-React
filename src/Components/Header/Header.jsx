import React from "react";

const Header = () => {
  return (
    <div className="navbar max-w-300 mx-auto bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CS — Ticket System</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <button className="btn bg-[#422AD5] rounded px-4">
              <span className="pr-2">+</span>New Ticket
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
