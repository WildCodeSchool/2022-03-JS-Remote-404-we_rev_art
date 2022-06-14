import React from "react";
import ArtistCards from "../components/ArtistCards";
import ArtistFilter from "../components/ArtistFilter";
import MiniHeader from "../components/miniHeader";

function Artists() {
  return (
    <div>
      <MiniHeader index={1} />
      <ArtistFilter />
      <ArtistCards />
    </div>
  );
}

export default Artists;
