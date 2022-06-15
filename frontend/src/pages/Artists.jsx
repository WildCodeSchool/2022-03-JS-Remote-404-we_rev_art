import React, { useState } from "react";
import ArtistCards from "../components/ArtistCards";
import ArtistFilter from "../components/ArtistFilter";
import MiniHeader from "../components/miniHeader";

function Artists() {
  const [filter, setFilter] = useState([]);
  console.warn(filter);

  return (
    <div>
      <MiniHeader index={1} />
      <ArtistFilter filter={filter} setFilter={setFilter} />
      <ArtistCards filter={filter} />
    </div>
  );
}

export default Artists;
