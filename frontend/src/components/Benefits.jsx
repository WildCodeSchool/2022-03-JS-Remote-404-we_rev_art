import React from "react";
import Checklist from "./Checklist";
import checklistData from "../data/ChecklistData";

function Benefits() {
  return (
    <div className="benefits">
      <h2 className="benefits-title">What are the benefits?</h2>
      <Checklist text={checklistData[0]} />
      <Checklist text={checklistData[1]} />
    </div>
  );
}

export default Benefits;
