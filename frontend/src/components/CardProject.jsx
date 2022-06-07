import React from "react";
import { Link } from "react-router-dom";
import lastProject from "../data/lastProject";
import "../style/cardProject.css";
import RegisterHome from "./RegisterHome";

function CardProject() {
  return (
    <section className="cardProject">
      <div className="cards">
        <h2>Latest project ads</h2>
        {lastProject.map((last) => (
          <div className="card" key={last.id}>
            <div className="spec">
              <h3>
                {last.title}
                <small className="small">
                  ~ {last.date} ~ {last.timeframe}
                </small>
              </h3>
              <p className="modalities">
                Technique : {last.technique} ~ Budget {last.budget}€ ~
                {last.nboffre} offers ~ client : {last.client}
              </p>
              <br />
              <p className="details"> Details of ad : {last.details}</p>
              <br />
              <p> {last.hashtag} </p>
            </div>
            <div>
              <img
                className="imageCardProject"
                src={last.image}
                alt={last.alt}
              />
            </div>
          </div>
        ))}
        <div className="homeToAllCard">
          <Link to="/ProjectAds">
            <button className="allCard" type="button">
              VIEW ALL ADS
            </button>
          </Link>
        </div>
      </div>
      <RegisterHome />
    </section>
  );
}

export default CardProject;
