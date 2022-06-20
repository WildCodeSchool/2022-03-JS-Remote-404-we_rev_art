import React from "react";
import { Link } from "react-router-dom";
import Checklist from "./Checklist";

import "../style/cardProject.css";

function RegisterHome() {
  return (
    <section className="registerAlignement">
      <div className="registerHome">
        <h3>ARE YOU A DIGITAL ARTIST ?</h3>
        <br />
        <p>register for free to find animation offers</p>
        <br />
        <Link to="/ProjectAds">
          <button className="cardProject_registerButton" type="button">
            CREATE YOUR PORTFOLIO
          </button>
        </Link>
        <br />
        <br />
        <h3>WHY REGISTER ?</h3>
        <div className="cardProject_checklist">
          <Checklist index={3} />
        </div>
      </div>
    </section>
  );
}

export default RegisterHome;
