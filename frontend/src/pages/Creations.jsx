import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CreationFilter from "../components/Filters/Creations/CreationFilter";
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
      <Helmet>
        <title>We Rev&apos;Art | Creations </title>
      </Helmet>
      <MiniHeader index={2} />
      <CreationFilter filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default Creations;
