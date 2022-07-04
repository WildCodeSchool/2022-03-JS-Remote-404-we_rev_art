import React, { useState } from "react";
import ProjectAdsFilter from "../components/Filters/ProjectAds/ProjectAdsFilter";
import MiniHeader from "../components/miniHeader";
import NewProject from "../components/NewProject";

function ProjectAds() {
  const [filter, setFilter] = useState({
    technique: [],
    contract: [],
    provider: [],
    clients: [],
    timeframe: [],
  });
  return (
    <div>
      <MiniHeader index={0} />

      <ProjectAdsFilter filter={filter} setFilter={setFilter} />
      <NewProject />
    </div>
  );
}
export default ProjectAds;
