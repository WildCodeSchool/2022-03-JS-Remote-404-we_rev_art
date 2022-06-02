import React from "react";
import Checklist from "./Checklist";
import checklistData from "../data/ChecklistData";

import "../style/Lists.css";

function Benefits() {
  return (
    <div className="benefits-container">
      <h2>What are the benefits?</h2>
      <section className="list-container">
        <Checklist text={checklistData[0]} />
        <Checklist text={checklistData[1]} />
      </section>
    </div>
  );
}

export default Benefits;
