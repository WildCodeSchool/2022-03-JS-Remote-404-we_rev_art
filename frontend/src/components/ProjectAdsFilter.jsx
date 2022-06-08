import { React } from "react";
import ProjectAdsFilterData from "../data/ProjectAdsFilterData";
import "../style/ProjectAdsFilter.css";
import ProjectFilterOption from "./ProjectFilterOption";

function ProjectAdsFilter() {
  return (
    <div className="projectad_container">
      <h2> Project Ads</h2>
      <h3>
        Find here all the project advertisements published by traditional
        artists, illustrators, museums, galleries, collectors and art lovers who
        are looking for digital artist(s) to animate physical artwork(s)
      </h3>
      <div className="buttonlist_map">
        {ProjectAdsFilterData.map((data) => (
          <ProjectFilterOption list={data} />
        ))}
      </div>
    </div>
  );
}

export default ProjectAdsFilter;
