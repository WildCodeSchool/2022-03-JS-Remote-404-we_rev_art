import React from "react";
import "../style/Field.css";

function Field({ el }) {
  return (
    <form>
      <label htmlFor={el.label} className="field_label">
        <div>
          {el.label}
          {el.required ? <span className="field_span"> (required) </span> : ""}
        </div>
        <input
          type="text"
          className={`field_input ${el.style}`}
          placeholder={`Enter your ${el.label.toLowerCase()}`}
        />
      </label>
    </form>
  );
}

export default Field;
