import React from "react";
import ArtistCardData from "../data/ArtistCardData";
import "../style/ArtistCard.css";

function ArtistCards() {
  return (
    <section className="card_container">
      <div className="card_map">
        {ArtistCardData.map((data) => (
          <div className="card-top" key={data.id}>
            <img className="card-img-top" src={data.image} alt={data.alt} />
            <div>
              <h4 className="card-title">{data.username}</h4>
              <p className="card-text">
                {data.country} <br />
                {data.nbcreation}
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{data.technique}</li>
                <li className="list-group-item"> {data.service_provider}</li>
                <li className="list-group-item"> {data.type_of_contract}</li>
              </ul>
              <br />
              <p className="card-body"> Details of ad : {data.presentation}</p>
              <br />
              <p className="artisthashtag"> {data.hashtag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtistCards;
