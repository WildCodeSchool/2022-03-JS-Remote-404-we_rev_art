import React from "react";
import "../style/cardProject.css";

function NewProject({ project }) {
  return (
    <div className="cardProject_card" key={project.id}>
      <div className="cardProject_spec">
        <h3>
          {project.title}
          <span className="cardProject_small">
            ~ {project.date.split("T")[0]} ~ {project.timeframe}
          </span>
        </h3>
        <p className="cardProject_modalities">
          Technique : {project.skills} ~ Budget {project.budget}€ ~
          {project.offers} offers ~ client : {project.customer}
        </p>
        <br />
        <p className="cardProject_details">Details of ad : {project.details}</p>
        <br />
        <p> {project.hashtag} </p>
      </div>
      <div>
        <img
          className="cardProject_imageCardProject"
          src={project.image}
          alt={project.alt}
        />
      </div>
    </div>
  );
}

export default NewProject;
