/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import user from "../images/user.png";
import ModalConnected from "./ModalConnected";

function Register() {
  const [modal, setModal] = useState(false);

  return (
    <section>
      <ul className="ul_container">
        <li>
          <button
            type="button"
            className="no_button"
            onClick={() => setModal(!modal)}
          >
            <img
              src={user}
              alt="avatar of a user"
              className="user_avatar_img"
            />
          </button>
        </li>
        <Link to="/Register">
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
      {modal && <ModalConnected setModal={setModal} />}
    </section>
  );
}

export default Register;
