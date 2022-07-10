import React from "react";
import "../style/SuggestionCard.css";
import titleTextData from "../data/titleTextData";
import ArtList from "./ArtList";
import TitleText from "./TitleText";

import gifData from "../data/gifData";

function Suggestioncard() {
  return (
    <section className="suggestioncards-container">
      <TitleText titleTextData={titleTextData} />
      <div className="suggestioncard-container">
        <h2>What would you like to do with your art?</h2>
        <div className="giphy_container">
          {gifData.map((gif) => (
            <div className="flex_container">
              <iframe
                src={gif.src}
                width={gif.width}
                height={gif.height}
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                title={gif.title}
              />
              <p>{gif.description}</p>
            </div>
          ))}

          <div className="giphy_hide" />
        </div>
        <ArtList />
      </div>
    </section>
  );
}

export default Suggestioncard;
