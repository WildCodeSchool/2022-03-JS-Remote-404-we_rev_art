import React from "react";
import fieldDataArtistAccount from "../data/fieldDataArtistAccount";

function Field() {
  return (
    <div className="field_container">
      {fieldDataArtistAccount.map((el) => (
        <label htmlFor={el.label} className="field_label">
          {el.label} {el.required === true ? <span> {el.required} </span> : ""}{" "}
          <input type="text" />
        </label>
      ))}
    </div>
  );
}

export default Field;
