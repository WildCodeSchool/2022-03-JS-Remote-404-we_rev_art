import React, { useState } from "react";
import ArtistCards from "../components/ArtistCards";
import ArtistFilter from "../components/ArtistFilter";
import MiniHeader from "../components/miniHeader";
import ArtistCardData from "../data/ArtistCardData";

function Artists() {
  const [filter, setFilter] = useState({
    like: [],
    provider: [],
    contract: [],
    technique: [],
  });

  return (
    <div>
      <MiniHeader index={1} />
      <ArtistFilter filter={filter} setFilter={setFilter} />
      <ArtistCards ArtistCardData={ArtistCardData} />
    </div>
  );
}

export default Artists;
