/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <ul className="ul_container">
        <Link to="/">
          <li>
            <a className="register_link"> Register</a>
          </li>
        </Link>
        <Link to="/">
          <li>
            <a className="register_link">Log in</a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Register;
