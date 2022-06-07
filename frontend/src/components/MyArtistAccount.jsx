import React from "react";
import Checkboxes from "./Checkboxes";
import Button from "./Button";

import checkboxesData from "../data/checkboxesData";
import buttonData from "../data/buttonData";
import fieldDataArtistAccount from "../data/fieldDataArtistAccount";

import "../style/MyAccount.css";
import Fields from "./Fields";

function MyArtistAccount() {
  return (
    <section className="myAccount_container_noMiniHeader">
      <Fields data={fieldDataArtistAccount} />

      <div className="myAccount_checkboxes_container">
        {checkboxesData.map((el) => (
          <Checkboxes data={el} />
        ))}
      </div>

      <div className="myAccount_buttons_container">
        {buttonData
          .filter((el) => el.id > 2 && el.id < 6)
          .map((el) => (
            <Button buttonData={el} />
          ))}
      </div>
    </section>
  );
}

export default MyArtistAccount;
