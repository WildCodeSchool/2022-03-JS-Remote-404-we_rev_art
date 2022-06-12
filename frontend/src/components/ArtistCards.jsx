import React from "react";
import ArtistCardData from "../data/ArtistCardData";
import "../style/ArtistCard.css";

function ArtistCards() {
  return (
    <section className="card-container">
      <div className="card">
        {ArtistCardData.map((data) => (
          <div className="cardProject_card" key={data.id}>
            <div>
              <img className="card-img-top" src={data.image} alt={data.alt} />

              <h3 className="card-title">
                {data.username}
                <span className="cardProject_small">
                  ~ {data.date} ~ {data.timeframe}
                </span>
              </h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> {data.technique}</li>
                <li className="list-group-item"> {data.country}</li>
                <li className="list-group-item"> {data.nbcreation}</li>
                <li className="list-group-item"> {data.technique}</li>
                <li className="list-group-item"> {data.service_provider}</li>
                <li className="list-group-item"> {data.type_of_contract}</li>
              </ul>
              <br />
              <p className="card-body"> Details of ad : {data.presentation}</p>
              <br />
              <p> {data.hashtag} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtistCards;
