import React, { useState, useEffect } from "react";
import axios from "axios";
import NewProject from "../components/NewProject";
import MiniHeader from "../components/miniHeader";

function MyProjectAds() {
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
      <MiniHeader index={6} />
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

export default MyProjectAds;
