import React from "react";
import { Link } from "react-router-dom";
import lastProject from "../data/lastProject";
import "../style/cardProject.css";

function CardProject() {
  return (
    <div className="cardProject">
      <h1 className="latestProject">Latest project ads</h1>
      {lastProject.map((last) => (
        <div className="card">
          <div className="spec">
            <h2>
              {last.title}
              <small className="small">
                ~ {last.date} ~ {last.timeframe}
              </small>
            </h2>
            <p>
              Technique : {last.technique} ~ Budget {last.budget}€ ~
              {last.nboffre} offers ~ client : {last.client}
            </p>
            <br />
            <p> Details of ad : {last.details}</p>
            <br />
            <p> {last.hashtag} </p>
          </div>
          <div>
            <img
              className="imageCardProject"
              src={last.image}
              alt="oeuvre d'art"
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
  );
}

export default CardProject;
