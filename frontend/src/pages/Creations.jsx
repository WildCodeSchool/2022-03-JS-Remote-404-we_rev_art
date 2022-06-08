import React from "react";
import CreationFilter from "../components/CreationFilter";
import MiniHeader from "../components/miniHeader";

function Creations() {
  return (
    <div>
      <MiniHeader index={2} />
      <CreationFilter />
    </div>
  );
}

export default Creations;
