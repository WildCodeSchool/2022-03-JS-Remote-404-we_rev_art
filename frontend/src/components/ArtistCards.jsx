import React from "react";

import "../style/ArtistCard.css";
import Likebutton from "./Likebutton";

function ArtistCards({ ArtistCardData }) {
  return (
    <section className="card_container">
      {ArtistCardData.map((data) => (
        <div className="card-top" key={data.id}>
          <div className="flex-container">
            <img className="card-img-top" src={data.image} alt={data.alt} />

            <h4 className="card-title">{data.username}</h4>
            <p className="card-text">
              {data.country} <br />
              {data.nbcreation}
            </p>
          </div>

          <div>
            <ul className="list-group">
              <li className="list-group-item">{data.technique}</li>
              <li className="list-group-item"> {data.service_provider}</li>
              <li className="list-group-item"> {data.type_of_contract}</li>
            </ul>

            <p className="card-body"> Details of ad : {data.presentation}</p>
            <Likebutton />
          </div>
        </div>
      ))}
    </section>
  );
}

export default ArtistCards;
