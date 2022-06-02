import React from "react";
import Button from "./Button";
import Checklist from "./Checklist";
import buttonData from "../data/buttonData";
import checklistData from "../data/ChecklistData";

function ArtList() {
  return (
    <section className="list-container2">
      <Checklist text={checklistData[2]} />
      <Button buttonData={buttonData[1]} />
    </section>
  );
}

export default ArtList;
