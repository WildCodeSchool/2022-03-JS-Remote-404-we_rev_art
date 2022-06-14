import React from "react";
import Button from "./Button";
import Checklist from "./Checklist";
import buttonData from "../data/buttonData";

function ArtList() {
  return (
    <section className="list-container2">
      <Checklist index={2} />
      <Button className="button-artlist" buttonData={buttonData[1]} />
    </section>
  );
}

export default ArtList;

