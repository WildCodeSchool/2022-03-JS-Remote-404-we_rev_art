import { React } from "react";
import ProjectAdsFilterData from "../data/ProjectAdsFilterData";
import "../style/ProjectAdsFilter.css";
import ProjectFilterOption from "./ProjectFilterOption";

function ProjectAdsFilter() {
  return (
    <div className="projectad_container">
      <div className="buttonlist_map">
        {ProjectAdsFilterData.map((data) => (
          <ProjectFilterOption list={data} />
        ))}
      </div>
    </div>
  );
}

export default ProjectAdsFilter;
