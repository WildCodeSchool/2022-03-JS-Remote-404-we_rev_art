import React from "react";
import lastProject from "../data/lastProject";
// import { Link } from "react-router-dom";

import "../style/cardProject.css";

function NewProject() {
  return (
    <section className="cardProject_cardProject">
      <div className="cardProject_cards">
        {lastProject.map((last) => (
          <div className="cardProject_card" key={last.id}>
            <div className="cardProject_spec">
              <h3>
                {last.title}
                <span className="cardProject_small">
                  ~ {last.date} ~ {last.timeframe}
                </span>
              </h3>
              <p className="cardProject_modalities">
                Technique : {last.technique} ~ Budget {last.budget}€ ~
                {last.nboffre} offers ~ client : {last.client}
              </p>
              <br />
              <p className="cardProject_details">
                {" "}
                Details of ad : {last.details}
              </p>
              <br />
              <p> {last.hashtag} </p>
            </div>
            <div>
              <img
                className="cardProject_imageCardProject"
                src={last.image}
                alt={last.alt}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewProject;
