import React from "react";
import ArtistCardData from "../data/ArtistCardData";
import "../style/ArtistCard.css";

function ArtistCards() {
  return (
    <section className="card">
      <div className="card_map">
        {ArtistCardData.map((data) => (
          <div className="allcards" key={data.id}>
            <div>
              <img className="card-img-top" src={data.image} alt={data.alt} />
              <div>
                <h4 className="card-title">{data.username}</h4>
                <p className="card-titlebis">
                  {data.country} <br />
                  {data.nbcreation}
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item1"> {data.technique}</li>
                <li className="list-group-item2"> {data.service_provider}</li>
                <li className="list-group-item3"> {data.type_of_contract}</li>
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
