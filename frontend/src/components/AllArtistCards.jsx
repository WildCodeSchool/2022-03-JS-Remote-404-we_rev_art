import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/ArtistCard.css";
import ArtistCards from "./ArtistCards";
import RegisterHome from "./RegisterHome";
import Likebutton from "./Likebutton";
/* CORRESPOND AU COMPONENT CARDPROJECT */

function AllArtistCards() {
  const [ArtistCardViews, setArtistCardViews] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/ArtistCardView?limit=3 `)
      .then((res) => {
        setArtistCardViews(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="cardProject_cardProject">
      <div className="cardProject_cards">
        <h2>Latest project ads</h2>
        {ArtistCardViews.map((ArtistCardView) => (
          <ArtistCards ArtistCardView={ArtistCardView} key={ArtistCardView} />
        ))}
        <div className="cardProject_homeToAllCard">
          <Link to="/Myprofilect_Ads" className="cardProject_allCard">
            All our artits
          </Link>
          <Likebutton />
        </div>
      </div>
      <RegisterHome />
    </section>
  );
}

export default AllArtistCards;
