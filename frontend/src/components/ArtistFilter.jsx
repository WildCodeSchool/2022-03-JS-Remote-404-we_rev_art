import React from "react";
import ArtistFilterData from "../data/ArtistFilterData";
import "../style/ProjectAdsFilter.css";
import ProjectFilterOption from "./ProjectFilterOption";

function ArtistFilter() {
  return (
    <div className="projectad_container">
      <div className="buttonlist_map">
        {ArtistFilterData.map((data) => (
          <ProjectFilterOption list={data} />
        ))}
      </div>
    </div>
  );
}

export default ArtistFilter;
