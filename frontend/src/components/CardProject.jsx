import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/cardProject.css";
import NewProject from "./NewProject";
import RegisterHome from "./RegisterHome";

function CardProject() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projects?limit=3 `)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="cardProject_cardProject">
      <div className="cardProject_cards">
        <h2>Latest project ads</h2>
        {projects.map((project) => (
          <NewProject project={project} key={project} />
        ))}
        <div className="cardProject_homeToAllCard">
          <Link to="/Project_Ads" className="cardProject_allCard">
            VIEW ALL ADS
          </Link>
        </div>
      </div>
      <RegisterHome />
    </section>
  );
}

export default CardProject;
