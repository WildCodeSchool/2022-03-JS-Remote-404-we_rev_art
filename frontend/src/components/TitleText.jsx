import React from "react";
import "../style/TitleText.css";

function TitleText({ titleTextData }) {
  return (
    <div className="titleText-container">
      {titleTextData.map((data) => (
        <section key={data.id} className="titleText-element">
          {data.number ? (
            <p className="titleText-number"> {data.number} </p>
          ) : (
            ""
          )}
          <div>
            <h3> {data.title} </h3>
            <p> {data.text} </p>
          </div>
        </section>
      ))}
    </div>
  );
}

export default TitleText;
