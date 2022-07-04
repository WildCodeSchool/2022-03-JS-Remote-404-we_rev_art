/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section>
      <ul className="ul_container">
        <Link className="register_link" to="/Register">
          Register
          <br />
          Log in
        </Link>
      </ul>
    </section>
  );
}

export default Register;
