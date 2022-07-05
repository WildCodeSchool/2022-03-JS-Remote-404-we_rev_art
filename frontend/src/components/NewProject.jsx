import React from "react";

import "../style/cardProject.css";

function NewProject({ projects }) {
  return (
    <section className="cardProject_cardProject">
      <div className="cardProject_cards">
        {projects.map((project) => (
          <div className="cardProject_card" key={project.id}>
            <div className="cardProject_spec">
              <h3>
                {project.title}
                <span className="cardProject_small">
                  ~ {project.date.split("T")[0]} ~ {project.timeframe}
                </span>
              </h3>
              <p className="cardProject_modalities">
                Technique : {project.skills_id} ~ Budget {project.budget}€ ~
                {project.offers} offers ~ client : {project.customer}
              </p>
              <br />
              <p className="cardProject_details">
                Details of ad : {project.details}
              </p>
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
        ))}
      </div>
    </section>
  );
}

export default NewProject;
