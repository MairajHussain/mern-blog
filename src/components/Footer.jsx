import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li>
          <Link to="/posts/categories/Agriculture" className="">
            Agriculture
          </Link>
        </li>
        <li>
          <Link to="/posts/categories/Business" className="">
            Business
          </Link>
        </li>
        <li>
          <Link to="/posts/categories/Education" className="">
            Education
          </Link>
        </li>
        <li>
          <Link to="/posts/categories/Art" className="">
            Art
          </Link>
        </li>
        <li>
          <Link to="/posts/categories/Weather" className="">
            Weather
          </Link>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>All rights reserved &copy; Copyright Ipsum Federation</small>
      </div>
    </footer>
  );
};

export default Footer;
