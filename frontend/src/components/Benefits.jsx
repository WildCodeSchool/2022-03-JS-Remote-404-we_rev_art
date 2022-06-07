import React from "react";
import Checklist from "./Checklist";

import "../style/Lists.css";

function Benefits() {
  return (
    <div className="benefits-container">
      <h2>What are the benefits?</h2>
      <section className="list-container">
        <Checklist index={0} />
        <Checklist index={1} />
      </section>
    </div>
  );
}

export default Benefits;
