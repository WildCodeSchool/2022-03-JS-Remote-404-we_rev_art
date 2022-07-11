import React from "react";
/* CORRESPOND AU COMPONENT NEWPROJECTS */
import "../style/ArtistCard.css";
import Likebutton from "./Likebutton";

function ArtistCards({ ArtistCardView }) {
  // console.log(ArtistCardView);
  return (
    <section className="card_container">
      <div className="card_map">
        <div className="card-top">
          <img
            className="card-img-top"
            src={ArtistCardView.image}
            alt={ArtistCardView.alt}
          />
          <div>
            <h4 className="card-title">
              {ArtistCardView.firstname && ArtistCardView.firstname}
            </h4>
            <p className="card-text">
              {ArtistCardView.country && ArtistCardView.country} <br />
              {ArtistCardView.nbcreation && ArtistCardView.nbcreation}
            </p>
            <ul className="list-group list-group-flush">
              {/* <li className="list-group-item">{ArtistCardView.skills}</li> */}
              <li className="list-group-item">
                {" "}
                {ArtistCardView.usertype && ArtistCardView.usertype}
              </li>
              <li className="list-group-item">
                {" "}
                {ArtistCardView.contracttype_id &&
                  ArtistCardView.contracttype_id}
              </li>
            </ul>

            <p className="card-body">
              {" "}
              Description :
              {ArtistCardView.description && ArtistCardView.description}
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
