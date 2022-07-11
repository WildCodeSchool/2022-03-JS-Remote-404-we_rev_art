import React from "react";
/* CORRESPOND AU COMPONENT NEWPROJECTS */
import "../style/ArtistCard.css";
import Likebutton from "./Likebutton";

function ArtistCards({ ArtistCardView }) {
  return (
    <section className="card_container">
      <div className="card_map">
        <div className="card-top" key={ArtistCardView.id}>
          <img
            className="card-img-top"
            src={ArtistCardView.image}
            alt={ArtistCardView.alt}
          />
          <div>
            <h4 className="card-title">{ArtistCardView.username}</h4>
            <p className="card-text">
              {ArtistCardView.country} <br />
              {ArtistCardView.nbcreation}
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{ArtistCardView.skills}</li>
              <li className="list-group-item"> {ArtistCardView.usertype}</li>
              <li className="list-group-item">
                {" "}
                {ArtistCardView.contracttype}
              </li>
            </ul>

            <p className="card-body">
              {" "}
              Details of ad : {ArtistCardView.description}
            </p>
            <Likebutton />
          </div>
          <div />
        </div>
      </div>
    </section>
  );
}

export default ArtistCards;
