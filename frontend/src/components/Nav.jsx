import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="nav_ul">
        <Link to="/">
          <li> Home </li>
        </Link>
        <Link to="/ProjectAds">
          <li> Project Ads </li>
        </Link>
        <Link to="/Artists">
          <li> Artists </li>
        </Link>
        <Link to="/Creations">
          <li> Creations </li>
        </Link>
        <Link to="/Help">
          <li> Help </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
