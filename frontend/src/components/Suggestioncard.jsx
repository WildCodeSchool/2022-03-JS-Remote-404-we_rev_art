import React from "react";
import "../style/SuggestionCard.css";
import ArtList from "./ArtList";
import suggestionsData from "../data/suggestionsData";

function Suggestioncard() {
  return (
    <section className="suggestioncard-container">
      <h2>What would you like to do with your art?</h2>
      <div className="cardsuggestion">
        {suggestionsData.map((data) => (
          <div key={data.id} className="sectionsuggestion">
            <p className="type_container">{data.type}</p>
          </div>
        ))}
      </div>
      <ArtList />
    </section>
  );
}

export default Suggestioncard;
