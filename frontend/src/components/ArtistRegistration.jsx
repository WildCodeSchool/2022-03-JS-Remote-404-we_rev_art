/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { useForm } from "react-hook-form";

import Checkboxes from "./Checkboxes";
import Fields from "./Fields";
import Buttons from "./Buttons";

import checkboxesData from "../data/checkboxesData";
import fieldDataArtistAccount from "../data/fieldDataArtistAccount";

import "../style/MyAccount.css";

function ArtistRegistration() {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.warn(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="myAccount_container_noMiniHeader"
    >
      <Fields data={fieldDataArtistAccount} />

      <div className="myAccount_checkboxes_container">
        {checkboxesData.map((el) => (
          <Checkboxes data={el} />
        ))}
      </div>
      <Buttons min={3} max={5} />
    </form>
  );
}

export default ArtistRegistration;
