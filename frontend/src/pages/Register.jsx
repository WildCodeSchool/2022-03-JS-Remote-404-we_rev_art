import React, { useState } from "react";
import MiniHeader from "../components/miniHeader";
import MyArtistAccount from "../components/MyArtistAccount";
// import Buttons from "../components/Buttons";

import "../style/register.css";

function Register() {
  const [customer, setCustomer] = useState(false);
  const [artist, setArtist] = useState(false);

  const handleClick1 = () => {
    setArtist(false);
    setCustomer(true);
  };

  const handleClick2 = () => {
    setCustomer(false);
    setArtist(true);
  };

  return (
    <div>
      <MiniHeader index={4} />
      <h4>What type of account do you want to create? </h4>
      {/* <Buttons min={6} max={7} /> */}

      <div className="register_buttons_container">
        <button
          type="button"
          className="button-style empty_yellow"
          onClick={handleClick1}
        >
          Customer Account
        </button>
        <button
          type="button"
          className="button-style empty_yellow"
          onClick={handleClick2}
        >
          Digital artist
        </button>
      </div>

      {artist ? <MyArtistAccount /> : ""}
      {customer ? "en cours" : ""}
    </div>
  );
}
export default Register;
