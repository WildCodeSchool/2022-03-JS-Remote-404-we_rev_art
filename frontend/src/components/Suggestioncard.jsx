import React from "react";
import "../style/SuggestionCard.css";
import ArtList from "./ArtList";
import suggestionsData from "../data/suggestionsData";

function Suggestioncard() {
  return (
    <div className="suggestioncard-container">
      <h2>What would you like to do with your art?</h2>
      <div className="cardsuggestion">
        {suggestionsData.map((data) => (
          <section key={data.id} className="sectionsuggestion">
            <p className="type_container">{data.type}</p>
          </section>
        ))}
      </div>
      <ArtList />
    </div>
  );
}

export default Suggestioncard;
