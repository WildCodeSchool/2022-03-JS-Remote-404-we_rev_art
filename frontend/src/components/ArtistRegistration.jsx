import React from "react";
import Checkboxes from "./Checkboxes";
import Fields from "./Fields";
import Buttons from "./Buttons";

import checkboxesData from "../data/checkboxesData";
import fieldDataArtistAccount from "../data/fieldDataArtistAccount";

import "../style/MyAccount.css";

function ArtistRegistration() {
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

export default ArtistRegistration;
