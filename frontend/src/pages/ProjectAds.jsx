import axios from "axios";
import React, { useState, useEffect } from "react";
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

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects `)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <MiniHeader index={0} />

      <ProjectAdsFilter filter={filter} setFilter={setFilter} />
      <NewProject projects={projects} />
    </div>
  );
}
export default ProjectAds;
