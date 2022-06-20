import React, { useState } from "react";
import "../style/ArtistCard.css";

function Likebutton() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(true);
  const handleClick = () => {
    setClicked(!clicked);
    if (clicked) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="likediv">
      <button className="btnfollow" type="button" onClick={() => handleClick()}>
        Follow
      </button>
      <button className="btncount" type="button">
        {" "}
        {count}{" "}
      </button>
    </div>
  );
}

export default Likebutton;
