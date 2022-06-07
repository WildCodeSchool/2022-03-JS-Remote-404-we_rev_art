import React from "react";
import MiniHeader from "../components/miniHeader";
import Field from "../components/Field";
import Checkboxes from "../components/Checkboxes";
import Button from "../components/Button";

import checkboxesData from "../data/checkboxesData";
import buttonData from "../data/buttonData";

import "../style/MyAccount.css";

function MyAccount() {
  return (
    <section className="myAccount_container">
      <MiniHeader index={5} />
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
    </section>
  );
}

export default MyAccount;
