import React from "react";
import "../style/HelpInfo.css";
import helpInfoData from "../data/helpInfoData";

function HelpInfo() {
  return (
    <div className="helpinfo-container">
      {helpInfoData.map((data) => (
        <li className="helpinfo-li">
          <a href="http://www.google.com"> {data.question} </a>
        </li>
      ))}
    </div>
  );
}

export default HelpInfo;
