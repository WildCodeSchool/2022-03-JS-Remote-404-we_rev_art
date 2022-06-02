import React from "react";
import "../style/Lists.css";

function Checklist({ text }) {
  return (
    <section className={text.style}>
      <p>{text.text1}</p>
      <p>{text.text2}</p>
      <p>{text.text3}</p>
      {text.text4 ? <p>{text.text4}</p> : ""}
    </section>
  );
}

export default Checklist;
