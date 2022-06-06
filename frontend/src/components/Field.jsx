import React from "react";
import fieldData from "../data/fieldData";

function Field({ index }) {
  return (
    <label htmlFor={fieldData[index]}>
      <input type="text" />
    </label>
  );
}

export default Field;
