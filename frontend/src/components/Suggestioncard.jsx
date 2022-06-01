import React from "react";
import "../style/SuggestionCard.css";

function Suggestioncard({ suggestionsData }) {
  return (
    <div className="suggestioncard-container">
      <h2 className="suggestion_h2">
        What would you like to do with your art?
      </h2>
      {suggestionsData.map((data) => (
        <section key={data.id} className="sectionsuggestion">
          <p className="type_container">{data.type}</p>
        </section>
      ))}
    </div>
  );
}

export default Suggestioncard;
