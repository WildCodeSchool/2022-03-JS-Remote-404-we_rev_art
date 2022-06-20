import React from "react";
import { Link } from "react-router-dom";
import lastProject from "../data/lastProject";
import "../style/cardProject.css";
import RegisterHome from "./RegisterHome";

function CardProject() {
  return (
    <section className="cardProject_cardProject">
      <div className="cardProject_cards">
        <h2>Latest project ads</h2>
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
        <div className="cardProject_homeToAllCard">
          <Link to="/ProjectAds" className="cardProject_allCard">
            VIEW ALL ADS
          </Link>
        </div>
      </div>
      <RegisterHome />
    </section>
  );
}

export default CardProject;
