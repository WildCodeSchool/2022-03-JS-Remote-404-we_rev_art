import React from "react";
import Image3 from "../images/arts/image3.png";
import Image2 from "../images/arts/image2.png";

import "../style/CreationCards.css";

function CreationCards() {
  return (
    <div className="card-group">
      <div className="card">
        <img className="card-img-top" src={Image3} alt="traditional art" />
        <div className="card-body">
          <h5 className="card-creation-title">Card title</h5>
          <p className="card-creation-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card_footer_img">
          <img className="card_footer_img" src={Image2} alt="traditional art" />
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={Image3} alt="traditional art" />
        <div className="card-body">
          <h5 className="card-creation-title">Card title</h5>
          <p className="card-creation-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
        </div>
        <div className="card_footer_img">
          <img className="card_footer_img" src={Image2} alt="traditional art" />
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
}

export default CreationCards;
