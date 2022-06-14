import React from "react";
import Checklist from "./Checklist";

import "../style/Lists.css";

function Benefits() {
  return (
    <section className="benefits-container">
      <h2>What are the benefits?</h2>
      <div className="list-container">
        <Checklist index={0} />
        <Checklist index={1} />
      </div>
    </section>
  );
}

export default Benefits;
