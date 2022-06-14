import React from "react";
import buttonData from "../data/buttonData";
import AllProjectsData from "../data/AllProjectsData";
import Button from "./Button";
import "../style/AllProjects.css";

function AllProjects() {
  return (
    <section>
      {AllProjectsData.map((last) => (
        <div className="global-container">
          <div className="contain">
            <h3>
              {last.title}
              <span className="col">
                ~ {last.date} ~ {last.timeframe}
              </span>
            </h3>
            <p className=""> Details of ad : {last.details}</p>
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
          <div>
            <p className="">
              Technique : {last.technique} ~ Budget {last.budget}€ ~
              {last.nboffre} offers ~ client : {last.client}
            </p>
          </div>

          <br />

          <div className="button-container">
            <Button buttonData={buttonData[7]} />
            <Button buttonData={buttonData[3]} />
            <Button buttonData={buttonData[4]} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default AllProjects;
