import React from "react";
import "../style/Lists.css";
import checklistData from "../data/ChecklistData";

function Checklist({ index }) {
  return (
    <section className={checklistData[index].style}>
      <p>{checklistData[index].text1}</p>
      <p>{checklistData[index].text2}</p>
      <p>{checklistData[index].text3}</p>
      {checklistData[index].text4 ? <p>{checklistData[index].text4}</p> : ""}
    </section>
  );
}

export default Checklist;
