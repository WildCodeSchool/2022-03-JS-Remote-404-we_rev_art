import React from "react";
import "../style/TitleText.css";

function TitleText({ titleTextData }) {
  return (
    <div className="titleText-container">
      {titleTextData.map((data) => (
        <section key={data.id} className="titleText-element">
          {data.number ? <p> data.number </p> : ""}
          <h2> {data.title} </h2>
          <p> {data.text} </p>
        </section>
      ))}
    </div>
  );
}

export default TitleText;
