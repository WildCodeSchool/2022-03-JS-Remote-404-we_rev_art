import React from "react";
import CreationFilterData from "../data/CreationFilterData";
import "../style/ProjectAdsFilter.css";
import ProjectFilterOption from "./ProjectFilterOption";

function CreationFilter() {
  return (
    <div className="projectad_container">
      <div className="buttonlist_map">
        {CreationFilterData.map((data) => (
          <ProjectFilterOption list={data} />
        ))}
      </div>
    </div>
  );
}

export default CreationFilter;
