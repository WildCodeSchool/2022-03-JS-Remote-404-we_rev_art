import React from "react";
import Checkboxes from "./Checkboxes";
import Fields from "./Fields";
import Buttons from "./Buttons";

import checkboxesData2 from "../data/checkboxesData2";
import checkboxesData3 from "../data/checkboxesData3";
import fieldDataCustomerAccount from "../data/fieldDataCustomerAccount";

import download from "../images/download.png";

import "../style/MyAccount.css";

function CustomerRegistration() {
  return (
    <section className="myAccount_container_noMiniHeader">
      <div className="myAccount_customer_subcontainer">
        <div className="myAccount_customer_subcontainer2">
          <h4 className="myAccount_checkboxes_container">You are ...</h4>
          <div className="myAccount_checkboxes_container2">
            {checkboxesData2.map((el) => (
              <Checkboxes data={el} />
            ))}
          </div>
        </div>

        <div className="upload_photo">
          <p>UPLOAD YOUR PHOTO (required) </p>
          <img src={download} alt="download" className="myAccount_download" />
        </div>
      </div>

      <Fields data={fieldDataCustomerAccount} />
      <div className="myAccount_checkboxes_container">
        {checkboxesData3.map((el) => (
          <Checkboxes data={el} />
        ))}
      </div>
      <Buttons min={3} max={5} />
    </section>
  );
}

export default CustomerRegistration;
