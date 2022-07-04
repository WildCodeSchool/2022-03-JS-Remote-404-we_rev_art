/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

import Mail from "../images/mail.png";

function Nav() {
  return (
    <section className="nav">
      <ul className="nav_ul">
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
        <Link to="/Contact_us">
          <img className="navMail" src={Mail} alt="logo mail" />
        </Link>
      </ul>
    </section>
  );
}

export default Nav;
