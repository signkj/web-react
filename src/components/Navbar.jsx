import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import "./navbar.css";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

import { links } from "../data";

const Navbar = () => {
  const [isNavShowing, setIsNaveShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo" onClick={() => setIsNaveShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        {/* <ul className="nav__links"> */}
        <ul
          className={`nav__links ${isNavShowing ? "show_nav" : "hide__nav"}`}
          onClick={() => setIsNaveShowing((prev) => !prev)}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNaveShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
