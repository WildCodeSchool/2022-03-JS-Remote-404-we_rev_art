import React from "react";
import buttonData from "../data/buttonData";
import AllProjectsData from "../data/AllProjectsData";
import Button from "./Button";

function AllProjects() {
  return (
    <section className="">
      {AllProjectsData.map((last) => (
        <div className="d-flex">
          <div className="">
            <h3>
              {last.title}
              <span className="">
                ~ {last.date} ~ {last.timeframe}
              </span>
            </h3>
            <p className=""> Details of ad : {last.details}</p>
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
          <br />
          <p> {last.hashtag} </p>

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
