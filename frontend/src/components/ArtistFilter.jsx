import React from "react";
import ArtistFilterData from "../data/ArtistFilterData";
import "../style/ProjectAdsFilter.css";
import ProjectFilterOption from "./ProjectFilterOption";

function ArtistFilter() {
  return (
    <div className="projectad_container">
      <h2> Artists</h2>
      <h3>
        Find here talented and creative digital artists, graphic designers and
        studios to animate your physical artwork(s) in motion, 2D, 3D, VR, AR
      </h3>
      <div className="buttonlist_map">
        {ArtistFilterData.map((data) => (
          <ProjectFilterOption list={data} />
        ))}
      </div>
    </div>
  );
}

export default ArtistFilter;
