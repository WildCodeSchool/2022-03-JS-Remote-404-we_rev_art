import React from "react";
import "../style/Lists.css";
import checklistData from "../data/ChecklistData";

function Checklist({ index }) {
  return (
    <section>
      {checklistData[index].text.map((data) => (
        <p>{data}</p>
      ))}
      ;
    </section>
  );
}

export default Checklist;
