import React, { useState } from "react";
import CreationFilter from "../components/CreationFilter";
import MiniHeader from "../components/miniHeader";

function Creations() {
  const [filter, setFilter] = useState({
    artwork: [],
    technique: [],
    clients: [],
    provider: [],
    like: [],
  });
  return (
    <div>
      <MiniHeader index={2} />
      <CreationFilter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default Creations;
