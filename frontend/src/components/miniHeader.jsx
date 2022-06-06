import React from "react";
import miniHeaderData from "../data/miniHeaderData";

function miniHeader({ index }) {
  return (
    <section>
      <h1> {miniHeaderData[index].title} </h1>
    </section>
  );
}

export default miniHeader;
