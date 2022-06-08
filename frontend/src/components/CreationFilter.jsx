import React from "react";
import CreationFilterData from "../data/CreationFilterData";
import "../style/ProjectAdsFilter.css";
import ProjectFilterOption from "./ProjectFilterOption";

function CreationFilter() {
  return (
    <div className="projectad_container">
      <h2> Creations</h2>
      <h3>
        Find here the creations made on WE REV’ART from digital artists, graphic
        designers and studios who have animated physical artworks in motion, 2D,
        3D, VR, AR
      </h3>
      <div className="buttonlist_map">
        {CreationFilterData.map((data) => (
          <ProjectFilterOption list={data} />
        ))}
      </div>
    </div>
  );
}

export default CreationFilter;
