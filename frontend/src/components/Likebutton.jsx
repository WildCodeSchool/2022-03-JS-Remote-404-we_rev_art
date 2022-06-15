import React, { useState } from "react";
import "../style/ArtistCard.css";

function Likebutton() {
  const [count, setCount] = useState(false);

  return (
    <div className="likediv">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Like
      </button>
      <p className="counter">{count} </p>
    </div>
  );
}

export default Likebutton;
