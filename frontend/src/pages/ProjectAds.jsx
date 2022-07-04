import React, { useState } from "react";
import ProjectAdsFilter from "../components/Filters/ProjectAds/ProjectAdsFilter";
import MiniHeader from "../components/miniHeader";

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
    </div>
  );
}

export default ProjectAds;
