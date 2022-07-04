import React from "react";
import ProjectAdsFilter from "../components/ProjectAdsFilter";
import MiniHeader from "../components/miniHeader";
import NewProject from "../components/NewProject";

function ProjectAds() {
  return (
    <div>
      <MiniHeader index={0} />
      <ProjectAdsFilter />
      <NewProject />
    </div>
  );
}

export default ProjectAds;
