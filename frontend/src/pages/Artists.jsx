import React from "react";
import ArtistFilter from "../components/ArtistFilter";
import MiniHeader from "../components/miniHeader";

function Artists() {
  return (
    <div>
      <MiniHeader index={1} />
      <ArtistFilter />
    </div>
  );
}

export default Artists;
