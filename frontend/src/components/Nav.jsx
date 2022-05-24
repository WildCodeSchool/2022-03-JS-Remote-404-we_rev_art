import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="nav_ul">
        <Link to="/">
          <li> Home </li>
        </Link>
        <Link to="/Page1">
          <li> Page1 </li>
        </Link>
        <Link to="/Page2">
          <li> Page2 </li>
        </Link>
        <Link to="/Page3">
          <li> Page3 </li>
        </Link>
        <Link to="/Page4">
          <li> Page4 </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
