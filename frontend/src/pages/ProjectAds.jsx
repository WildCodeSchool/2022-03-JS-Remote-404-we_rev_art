import axios from "axios";
import React, { useState, useEffect } from "react";
import ProjectAdsFilter from "../components/Filters/ProjectAds/ProjectAdsFilter";
import MiniHeader from "../components/miniHeader";
import NewProject from "../components/NewProject";

function ProjectAds() {
  const [filter, setFilter] = useState({
    skills: [],
    contracttype: [],
    usertype: [],
  });

  const [projects, setProjects] = useState([]);

  let url = `${import.meta.env.VITE_BACKEND_URL}/projects?limit=25`;
  if (filter.skills[0]) {
    url += `&skills=${filter.skills.join("|")}`;
  }
  if (filter.contracttype[0]) {
    url += `&contracttype=${filter.contracttype.join("|")}`;
  }
  if (filter.usertype[0]) {
    url += `&usertype=${filter.usertype.join("|")}`;
  }
  useEffect(() => {
    axios
      .get(url)
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
            <NewProject project={project} key={project.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default ProjectAds;
