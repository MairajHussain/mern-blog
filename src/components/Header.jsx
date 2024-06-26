import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logoipsum-311.svg";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="Navbar logo" />
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to="/profile">Jane Doe</Link>
          </li>
          <li>
            <Link to="/create">New Post</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/logout">Sign Out</Link>
          </li>
        </ul>
        <button className="nav__toggle-btn">
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
};

export default Header;
