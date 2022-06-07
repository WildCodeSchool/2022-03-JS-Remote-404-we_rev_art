import React from "react";
import Field from "./Field";

function Fields({ data }) {
  return (
    <div className="field_container">
      {data.map((element) => (
        <Field el={element} />
      ))}
    </div>
  );
}

export default Fields;
