import React from "react";
import ProjectAdsFilter from "../components/ProjectAdsFilter";
import MiniHeader from "../components/miniHeader";

function ProjectAds() {
  return (
    <div>
      <MiniHeader index={0} />
      <ProjectAdsFilter />
    </div>
  );
}

export default ProjectAds;
