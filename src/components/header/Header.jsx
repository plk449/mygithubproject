import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row w-full h-10 bg-green-400 items-center ">
      <div className="w-[20%] bg-red-400">LOGO</div>
      <div className="w-[100%] bg-yellow-400 flex flex-row justify-center items-center">
        <ul className="flex justify-around w-[100%]">
          <li>
            <NavLink to="/">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/Followers">Followers</NavLink>
          </li>
          <li>
            <NavLink to="/Following">Following</NavLink>
          </li>
          <li>
            <NavLink to="/RepositoriesPage">Repositories</NavLink>
          </li>
          <li>
            <Link to="https://github.com/plk449">Github</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
