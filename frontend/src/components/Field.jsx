/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";

import "../style/Field.css";

function Field({ el }) {
  const { register } = useForm();

  return (
    <label htmlFor={el.label} className="field_label">
      <div>
        {el.label}
        {el.required ? <span className="field_span"> (required) </span> : ""}
      </div>
      <input
        type="text"
        className={`field_input ${el.style}`}
        placeholder={`Enter your ${el.label.toLowerCase()}`}
        {...register(el.label, { required: el.required })}
      />
    </label>
  );
}

export default Field;
