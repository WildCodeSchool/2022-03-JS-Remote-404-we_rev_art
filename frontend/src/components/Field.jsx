import React from "react";
import fieldDataArtistAccount from "../data/fieldDataArtistAccount";
import "../style/Field.css";

function Field() {
  return (
    <div className="field_container">
      {fieldDataArtistAccount.map((el) => (
        <label htmlFor={el.label} className="field_label">
          <div>
            {el.label}
            {el.required ? (
              <span className="field_span"> (required) </span>
            ) : (
              ""
            )}
          </div>
          <input
            type="text"
            className="field_input"
            placeholder={`Enter your ${el.label.toLowerCase()}`}
          />
        </label>
      ))}
    </div>
  );
}

export default Field;
