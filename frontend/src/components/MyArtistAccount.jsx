import React from "react";
import Checkboxes from "./Checkboxes";

import checkboxesData from "../data/checkboxesData";
import fieldDataArtistAccount from "../data/fieldDataArtistAccount";

import "../style/MyAccount.css";
import Fields from "./Fields";
import Buttons from "./Buttons";

function MyArtistAccount() {
  return (
    <section className="myAccount_container_noMiniHeader">
      <Fields data={fieldDataArtistAccount} />

      <div className="myAccount_checkboxes_container">
        {checkboxesData.map((el) => (
          <Checkboxes data={el} />
        ))}
      </div>
      <Buttons min={3} max={5} />
    </section>
  );
}

export default MyArtistAccount;
