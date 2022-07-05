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
  }, [filter]);

  return (
    <div>
      <MiniHeader index={0} />

      <ProjectAdsFilter filter={filter} setFilter={setFilter} />
      <section className="cardProject_cardProject">
        <div className="cardProject_cards">
          {projects.map((project) => (
            <NewProject project={project} key={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default ProjectAds;
