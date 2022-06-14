/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <section className="nav">
      <ul className="nav_ul">
        <Link to="/">
          <li>
            <a className="nav_link"> Home</a>
          </li>
        </Link>
        <Link to="/Project_Ads">
          <li>
            <a className="nav_link">Project Ads</a>
          </li>
        </Link>
        <Link to="/Artists">
          <li>
            <a className="nav_link">Artists</a>
          </li>
        </Link>
        <Link to="/Creations">
          <li>
            <a className="nav_link">Creations</a>
          </li>
        </Link>
        <Link to="/Help">
          <li>
            <a className="nav_link">Help</a>
          </li>
        </Link>
      </ul>
    </section>
  );
}

export default Nav;
