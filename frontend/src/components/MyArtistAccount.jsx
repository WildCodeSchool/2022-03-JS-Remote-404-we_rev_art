import React from "react";
import Field from "./Field";
import Checkboxes from "./Checkboxes";
import Button from "./Button";

import checkboxesData from "../data/checkboxesData";
import buttonData from "../data/buttonData";

import "../style/MyAccount.css";

function MyArtistAccount() {
  return (
    <section className="myAccount_container_noMiniHeader">
      <Field index={0} />
      <div className="myAccount_checkboxes_container">
        {checkboxesData.map((el) => (
          <Checkboxes data={el} />
        ))}
      </div>

      <div className="myAccount_buttons_container">
        <Button buttonData={buttonData[2]} />
        <Button buttonData={buttonData[3]} />
        <Button buttonData={buttonData[4]} />
      </div>
    </section>
  );
}

export default MyArtistAccount;
